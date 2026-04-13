import { AUDIO_EVENT_LABELS, UI_EVENT_LABELS } from './constants'

function escapeRegexLiteral(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createBracketEventRegex(labels: readonly string[]): RegExp {
  const labelPattern = labels.map(escapeRegexLiteral).join('|')
  return new RegExp(`^\\[((?:${labelPattern}))[：:](.*)\\]$`)
}

export const AUDIO_EVENT_REGEX = createBracketEventRegex(AUDIO_EVENT_LABELS)
export const UI_EVENT_REGEX = createBracketEventRegex(UI_EVENT_LABELS)
export const SQUARE_BRACKET_NOTE_REGEX = /^\[[^\]]*\]$/
export const FULLWIDTH_BRACKET_NOTE_REGEX = /^【[^】]*】$/
