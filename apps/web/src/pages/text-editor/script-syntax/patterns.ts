import { EPISODE_UNIT_LABELS, SCENE_INTERIOR_LABELS, SCENE_TIME_OF_DAY_LABELS, SECTION_HEADER_LABELS } from './constants'

const SCENE_NUMBER_PATTERN = '[0-9]{1,4}\\s*[-－—./]\\s*[0-9]{1,4}[A-Za-z]?'
const SCENE_TIME_OF_DAY_PATTERN = SCENE_TIME_OF_DAY_LABELS.join('|')
const SCENE_INTERIOR_PATTERN = SCENE_INTERIOR_LABELS.join('|')
const EPISODE_UNIT_PATTERN = EPISODE_UNIT_LABELS.join('')
const SECTION_HEADER_PATTERN = SECTION_HEADER_LABELS.join('|')

export const DIALOGUE_LINE_STATS_REGEX = /^[^【\[\n：:]+[：:](.+)$/gm
export const DIALOGUE_LINE_PARSE_REGEX = /^([^【\[\s：:]+)[：:]\s*(?:[（(]([^）)]+)[）)])?\s*(.*)$/
export const DIALOGUE_CHARACTER_HIGHLIGHT_REGEX = /^[^【\[\s：:]+(?=[：:])/

export const ACTION_LINE_STATS_REGEX = /^▲\s*(.+)$/gm
export const ACTION_LINE_PARSE_REGEX = /^▲\s*(.+)$/
export const ACTION_LINE_HIGHLIGHT_REGEX = /^▲.*/

export const SCENE_HEADER_HIGHLIGHT_REGEX = new RegExp(`^\\s*${SCENE_NUMBER_PATTERN}\\s+.*`)
export const SCENE_HEADER_PARSE_REGEX = new RegExp(
  `^(${SCENE_NUMBER_PATTERN})\\s+(${SCENE_TIME_OF_DAY_PATTERN})\\s+(${SCENE_INTERIOR_PATTERN})\\s+(.+)$`
)

export const CHARACTERS_LINE_REGEX = /^出场人物[：:]\s*(.+)$/

export const EPISODE_HEADER_CN_REGEX = new RegExp(`^[\\[【(（<《]?\\s*第\\s*[零〇一二三四五六七八九十百千万0-9]+\\s*[${EPISODE_UNIT_PATTERN}].*$`)
export const EPISODE_HEADER_EN_REGEX = /^\s*(?:EPISODE|EP|E)\.?\s*[0-9IVXLCDM]+\s*[\]】)）>》]?.*$/i
export const EPISODE_HEADER_SEASON_REGEX = /^\s*S[0-9]{1,2}E[0-9]{1,3}.*$/i
export const SECTION_HEADER_REGEX = new RegExp(`^\\s*(?:[一二三四五六七八九十0-9]+[、.．]\\s*)?(?:${SECTION_HEADER_PATTERN})\\s*[：:]?\\s*$`)

export const STAGE_DIRECTION_INLINE_REGEX = /[（(][^）)]*[）)]/
