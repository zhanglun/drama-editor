import { describe, expect, it } from 'vitest'

import { parseScript } from './model'
import { SCRIPT_FIXTURE_DOCUMENTS, SCRIPT_FIXTURE_LINES } from './script-fixtures'

describe('parseScript', () => {
  it('parses screenplay structures into scenes and blocks', () => {
    const scenes = parseScript(SCRIPT_FIXTURE_DOCUMENTS.fullStructuredSample)

    expect(scenes).toHaveLength(2)
    expect(scenes[0].blocks).toEqual([
      { type: 'episodeHeader', text: SCRIPT_FIXTURE_LINES.episodeHeaderCn, line: 1 },
      { type: 'sectionHeader', text: SCRIPT_FIXTURE_LINES.sectionHeader, line: 2 },
    ])

    expect(scenes[1].number).toBe('1-1')
    expect(scenes[1].timeOfDay).toBe('上午')
    expect(scenes[1].interior).toBe('内')
    expect(scenes[1].location).toBe('客厅')
    expect(scenes[1].characters).toEqual(['宋也', '林晚'])
    expect(scenes[1].blocks).toEqual([
      { type: 'dialogue', character: '宋也', stageDirection: '低声', text: '你为什么不说话？', line: 5 },
      { type: 'action', text: '他低头点燃香烟。', line: 6 },
      { type: 'audioEvent', label: '音效', text: '手机震动', line: 7 },
      { type: 'audioEvent', label: 'BGM', text: '压抑的弦乐渐起', line: 8 },
      { type: 'uiEvent', label: '系统提示', text: '任务已完成', line: 9 },
      { type: 'bracketNote', text: SCRIPT_FIXTURE_LINES.bracketNoteSquare, line: 10 },
      { type: 'bracketNote', text: SCRIPT_FIXTURE_LINES.bracketNoteFullwidth, line: 11 },
    ])
  })

  it('does not misclassify bracketed lines as dialogue', () => {
    const scenes = parseScript(SCRIPT_FIXTURE_DOCUMENTS.bracketedEventsSample)

    expect(scenes).toHaveLength(1)
    expect(scenes[0].blocks).toEqual([
      { type: 'audioEvent', label: '环境音', text: '酒店大厅轻柔的背景音乐《春江花月夜》', line: 2 },
      { type: 'uiEvent', label: '弹幕', text: '这也太虐了', line: 3 },
    ])
  })
})
