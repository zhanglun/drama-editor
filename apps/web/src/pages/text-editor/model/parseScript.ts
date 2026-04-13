import {
  ACTION_LINE_PARSE_REGEX,
  AUDIO_EVENT_REGEX,
  CHARACTERS_LINE_REGEX,
  DIALOGUE_LINE_PARSE_REGEX,
  EPISODE_HEADER_CN_REGEX,
  EPISODE_HEADER_EN_REGEX,
  EPISODE_HEADER_SEASON_REGEX,
  FULLWIDTH_BRACKET_NOTE_REGEX,
  SCENE_HEADER_PARSE_REGEX,
  SECTION_HEADER_REGEX,
  SQUARE_BRACKET_NOTE_REGEX,
  UI_EVENT_REGEX,
} from '../script-syntax'

export interface Scene {
  id: string
  number: string
  timeOfDay: string
  interior: string
  location: string
  characters: string[]
  blocks: ScriptBlock[]
  startLine: number
}

export type ScriptBlock =
  | { type: 'episodeHeader'; text: string; line: number }
  | { type: 'sectionHeader'; text: string; line: number }
  | { type: 'dialogue'; character: string; stageDirection: string; text: string; line: number }
  | { type: 'action'; text: string; line: number }
  | { type: 'audioEvent'; label: string; text: string; line: number }
  | { type: 'uiEvent'; label: string; text: string; line: number }
  | { type: 'bracketNote'; text: string; line: number }

const BLANK_LINE_REGEX = /^\s*$/

export function parseScript(text: string): Scene[] {
  const lines = text.split('\n')
  const scenes: Scene[] = []
  let currentScene: Scene | null = null
  let sceneCounter = 0

  function ensureScene(startLine: number): Scene {
    if (currentScene) return currentScene

    sceneCounter++
    currentScene = {
      id: `scene-${sceneCounter}`,
      number: '1-1',
      timeOfDay: '',
      interior: '',
      location: '',
      characters: [],
      blocks: [],
      startLine,
    }
    scenes.push(currentScene)
    return currentScene
  }

  for (const [lineIndex, rawLine] of lines.entries()) {
    const line = rawLine.trimEnd()
    const trimmed = line.trim()
    const startLine = lineIndex + 1

    if (BLANK_LINE_REGEX.test(trimmed)) continue

    const sceneMatch = trimmed.match(SCENE_HEADER_PARSE_REGEX)
    if (sceneMatch) {
      sceneCounter++
      currentScene = {
        id: `scene-${sceneCounter}`,
        number: sceneMatch[1],
        timeOfDay: sceneMatch[2],
        interior: sceneMatch[3],
        location: sceneMatch[4].trim(),
        characters: [],
        blocks: [],
        startLine,
      }
      scenes.push(currentScene)
      continue
    }

    if (
      EPISODE_HEADER_CN_REGEX.test(trimmed)
      || EPISODE_HEADER_EN_REGEX.test(trimmed)
      || EPISODE_HEADER_SEASON_REGEX.test(trimmed)
    ) {
      ensureScene(startLine).blocks.push({ type: 'episodeHeader', text: trimmed, line: startLine })
      continue
    }

    if (SECTION_HEADER_REGEX.test(trimmed)) {
      ensureScene(startLine).blocks.push({ type: 'sectionHeader', text: trimmed, line: startLine })
      continue
    }

    const activeScene = ensureScene(startLine)

    const charactersMatch = trimmed.match(CHARACTERS_LINE_REGEX)
    if (charactersMatch) {
      activeScene.characters = charactersMatch[1].split(/[、,，]/).map(s => s.trim()).filter(Boolean)
      continue
    }

    const audioEventMatch = trimmed.match(AUDIO_EVENT_REGEX)
    if (audioEventMatch) {
      activeScene.blocks.push({
        type: 'audioEvent',
        label: audioEventMatch[1].trim(),
        text: audioEventMatch[2].trim(),
        line: startLine,
      })
      continue
    }

    const uiEventMatch = trimmed.match(UI_EVENT_REGEX)
    if (uiEventMatch) {
      activeScene.blocks.push({
        type: 'uiEvent',
        label: uiEventMatch[1].trim(),
        text: uiEventMatch[2].trim(),
        line: startLine,
      })
      continue
    }

    if (SQUARE_BRACKET_NOTE_REGEX.test(trimmed) || FULLWIDTH_BRACKET_NOTE_REGEX.test(trimmed)) {
      activeScene.blocks.push({ type: 'bracketNote', text: trimmed, line: startLine })
      continue
    }

    const actionMatch = trimmed.match(ACTION_LINE_PARSE_REGEX)
    if (actionMatch) {
      activeScene.blocks.push({ type: 'action', text: actionMatch[1].trim(), line: startLine })
      continue
    }

    const dialogueMatch = trimmed.match(DIALOGUE_LINE_PARSE_REGEX)
    if (dialogueMatch && dialogueMatch[1].length <= 20) {
      activeScene.blocks.push({
        type: 'dialogue',
        character: dialogueMatch[1].trim(),
        stageDirection: dialogueMatch[2]?.trim() ?? '',
        text: dialogueMatch[3]?.trim() ?? '',
        line: startLine,
      })
      continue
    }

    activeScene.blocks.push({ type: 'action', text: trimmed, line: startLine })
  }

  return scenes
}
