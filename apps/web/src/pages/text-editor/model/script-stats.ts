const WORD_REGEX = /[\u4e00-\u9fff]|[a-zA-Z]+/g
const WHITESPACE_REGEX = /\s/g
const CHARS_PER_MINUTE = 500

export interface ScriptStats {
  wordCount: number
  charCountNoSpace: number
  readingTime: string
}

function countWords(text: string): number {
  const matches = text.match(WORD_REGEX)
  return matches ? matches.length : 0
}

function countCharsNoWhitespace(text: string): number {
  return text.replace(WHITESPACE_REGEX, '').length
}

function formatMinutes(minutes: number): string {
  if (minutes < 1) return '不到1分钟'
  if (minutes < 60) return `约${Math.round(minutes)}分钟`

  const hours = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)

  return mins > 0 ? `约${hours}小时${mins}分钟` : `约${hours}小时`
}

export function getScriptStats(text: string): ScriptStats {
  const wordCount = countWords(text)

  return {
    wordCount,
    charCountNoSpace: countCharsNoWhitespace(text),
    readingTime: formatMinutes(wordCount / CHARS_PER_MINUTE),
  }
}
