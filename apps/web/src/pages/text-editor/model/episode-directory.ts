import {
  EPISODE_HEADER_CN_REGEX,
  EPISODE_HEADER_EN_REGEX,
  EPISODE_HEADER_SEASON_REGEX,
  SCENE_HEADER_PARSE_REGEX,
} from '../script-syntax'

export interface EpisodeSegment {
  id: string
  index: number
  title: string
  summary: string
  content: string
  start: number
  end: number
  startLine: number
  endLine: number
  sceneCount: number
  wordCount: number
}

const WORD_REGEX = /[\u4e00-\u9fff]|[a-zA-Z]+/g

function isEpisodeHeader(line: string): boolean {
  return (
    EPISODE_HEADER_CN_REGEX.test(line)
    || EPISODE_HEADER_EN_REGEX.test(line)
    || EPISODE_HEADER_SEASON_REGEX.test(line)
  )
}

function countWords(text: string): number {
  const matches = text.match(WORD_REGEX)
  return matches ? matches.length : 0
}

function countScenes(text: string): number {
  return text
    .split('\n')
    .filter(line => SCENE_HEADER_PARSE_REGEX.test(line.trim()))
    .length
}

function buildSummary(content: string): string {
  const lines = content
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)

  const firstBodyLine = lines.find((line, index) => index > 0 && !isEpisodeHeader(line)) ?? lines[1] ?? lines[0] ?? ''
  return firstBodyLine.slice(0, 24) || '暂未填写剧情摘要'
}

function buildSegment(
  index: number,
  content: string,
  start: number,
  end: number,
  startLine: number,
  endLine: number,
  header?: string,
): EpisodeSegment {
  const title = header?.trim() || `第${index + 1}集`

  return {
    id: `episode-${index}`,
    index,
    title,
    summary: buildSummary(content),
    content,
    start,
    end,
    startLine,
    endLine,
    sceneCount: countScenes(content),
    wordCount: countWords(content),
  }
}

export function extractEpisodeSegments(text: string): EpisodeSegment[] {
  if (!text.trim()) {
    return [buildSegment(0, '', 0, 0, 1, 1)]
  }

  const lines = text.split('\n')
  const lineOffsets: number[] = []
  let offset = 0

  for (const line of lines) {
    lineOffsets.push(offset)
    offset += line.length + 1
  }

  const headerLines = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => isEpisodeHeader(line.trim()))

  if (headerLines.length === 0) {
    return [buildSegment(0, text, 0, text.length, 1, lines.length || 1)]
  }

  const segments: EpisodeSegment[] = []

  headerLines.forEach(({ line, index: lineIndex }, segmentIndex) => {
    const start = lineOffsets[lineIndex]
    const nextLineIndex = headerLines[segmentIndex + 1]?.index
    const end = nextLineIndex === undefined ? text.length : lineOffsets[nextLineIndex]
    const content = text.slice(start, end).replace(/\n+$/, '')

    segments.push(
      buildSegment(
        segmentIndex,
        content,
        start,
        end,
        lineIndex + 1,
        nextLineIndex ?? lines.length,
        line,
      ),
    )
  })

  const firstHeaderLineIndex = headerLines[0]?.index ?? 0
  const leadingContent = text.slice(0, lineOffsets[firstHeaderLineIndex]).trim()

  if (leadingContent) {
    return [
      buildSegment(0, leadingContent, 0, lineOffsets[firstHeaderLineIndex], 1, firstHeaderLineIndex, '未分集'),
      ...segments.map((segment, index) => ({
        ...segment,
        id: `episode-${index + 1}`,
        index: index + 1,
      })),
    ]
  }

  return segments
}
