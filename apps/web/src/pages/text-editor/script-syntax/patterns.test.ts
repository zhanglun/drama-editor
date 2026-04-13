import { describe, expect, it } from 'vitest'

import { SCRIPT_FIXTURE_LINES } from '../script-fixtures'
import {
  ACTION_LINE_PARSE_REGEX,
  AUDIO_EVENT_REGEX,
  DIALOGUE_CHARACTER_HIGHLIGHT_REGEX,
  DIALOGUE_LINE_PARSE_REGEX,
  EPISODE_HEADER_CN_REGEX,
  EPISODE_HEADER_EN_REGEX,
  EPISODE_HEADER_SEASON_REGEX,
  FULLWIDTH_BRACKET_NOTE_REGEX,
  SCENE_HEADER_HIGHLIGHT_REGEX,
  SCENE_HEADER_PARSE_REGEX,
  SECTION_HEADER_REGEX,
  SQUARE_BRACKET_NOTE_REGEX,
  STAGE_DIRECTION_INLINE_REGEX,
  UI_EVENT_REGEX,
} from './index'

describe('script syntax patterns', () => {
  it('matches episode headers', () => {
    expect(EPISODE_HEADER_CN_REGEX.test(SCRIPT_FIXTURE_LINES.episodeHeaderCn)).toBe(true)
    expect(EPISODE_HEADER_CN_REGEX.test(SCRIPT_FIXTURE_LINES.episodeHeaderCnAlt)).toBe(true)
    expect(EPISODE_HEADER_EN_REGEX.test(SCRIPT_FIXTURE_LINES.episodeHeaderEn)).toBe(true)
    expect(EPISODE_HEADER_SEASON_REGEX.test(SCRIPT_FIXTURE_LINES.episodeHeaderSeason)).toBe(true)
  })

  it('matches section headers', () => {
    expect(SECTION_HEADER_REGEX.test(SCRIPT_FIXTURE_LINES.sectionHeader)).toBe(true)
    expect(SECTION_HEADER_REGEX.test(SCRIPT_FIXTURE_LINES.sectionHeaderIndexed)).toBe(true)
    expect(SECTION_HEADER_REGEX.test(SCRIPT_FIXTURE_LINES.plainText)).toBe(false)
  })

  it('matches scene headers for highlight and parse', () => {
    expect(SCENE_HEADER_HIGHLIGHT_REGEX.test(SCRIPT_FIXTURE_LINES.sceneHeaderBasic)).toBe(true)
    expect(SCENE_HEADER_HIGHLIGHT_REGEX.test(SCRIPT_FIXTURE_LINES.sceneHeaderAlt)).toBe(true)

    const parsed = SCRIPT_FIXTURE_LINES.sceneHeaderBasic.match(SCENE_HEADER_PARSE_REGEX)
    expect(parsed?.[1]).toBe('1-1')
    expect(parsed?.[2]).toBe('上午')
    expect(parsed?.[3]).toBe('内')
    expect(parsed?.[4]).toBe('客厅')
  })

  it('matches dialogue and character patterns', () => {
    const dialogue = SCRIPT_FIXTURE_LINES.dialogueWithDirection.match(DIALOGUE_LINE_PARSE_REGEX)

    expect(dialogue?.[1]).toBe('宋也')
    expect(dialogue?.[2]).toBe('低声')
    expect(dialogue?.[3]).toBe('你为什么不说话？')
    expect(DIALOGUE_CHARACTER_HIGHLIGHT_REGEX.test(SCRIPT_FIXTURE_LINES.dialogue)).toBe(true)
    expect(DIALOGUE_CHARACTER_HIGHLIGHT_REGEX.test(SCRIPT_FIXTURE_LINES.audioAmbient)).toBe(false)
  })

  it('matches action and inline stage direction', () => {
    const action = SCRIPT_FIXTURE_LINES.actionWithSpace.match(ACTION_LINE_PARSE_REGEX)

    expect(action?.[1]).toBe('他低头点燃香烟。')
    expect(STAGE_DIRECTION_INLINE_REGEX.test(SCRIPT_FIXTURE_LINES.dialogueWithDirection)).toBe(true)
  })

  it('matches audio and ui events plus fallback bracket notes', () => {
    const audio = SCRIPT_FIXTURE_LINES.audioBgm.match(AUDIO_EVENT_REGEX)
    const ui = SCRIPT_FIXTURE_LINES.uiSystem.match(UI_EVENT_REGEX)

    expect(audio?.[1]).toBe('BGM')
    expect(audio?.[2]).toBe('压抑的弦乐渐起')
    expect(ui?.[1]).toBe('系统提示')
    expect(ui?.[2]).toBe('任务已完成')
    expect(SQUARE_BRACKET_NOTE_REGEX.test(SCRIPT_FIXTURE_LINES.bracketNoteSquare)).toBe(true)
    expect(FULLWIDTH_BRACKET_NOTE_REGEX.test(SCRIPT_FIXTURE_LINES.bracketNoteFullwidth)).toBe(true)
  })
})
