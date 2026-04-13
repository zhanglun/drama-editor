import type { Monaco } from '@monaco-editor/react'
import {
  ACTION_LINE_HIGHLIGHT_REGEX,
  AUDIO_EVENT_REGEX,
  DIALOGUE_CHARACTER_HIGHLIGHT_REGEX,
  EPISODE_HEADER_CN_REGEX,
  EPISODE_HEADER_EN_REGEX,
  EPISODE_HEADER_SEASON_REGEX,
  FULLWIDTH_BRACKET_NOTE_REGEX,
  SCENE_HEADER_HIGHLIGHT_REGEX,
  SECTION_HEADER_REGEX,
  SQUARE_BRACKET_NOTE_REGEX,
  STAGE_DIRECTION_INLINE_REGEX,
  UI_EVENT_REGEX,
} from '../../script-syntax'

let isRegistered = false

export function registerScriptMonaco(monaco: Monaco) {
  if (isRegistered) return

  monaco.languages.register({ id: 'chinese-plaintext' })
  monaco.languages.setMonarchTokensProvider('chinese-plaintext', {
    unicode: true,
    tokenizer: {
      root: [
        [EPISODE_HEADER_CN_REGEX, 'episode-header'],
        [EPISODE_HEADER_EN_REGEX, 'episode-header'],
        [EPISODE_HEADER_SEASON_REGEX, 'episode-header'],
        [SECTION_HEADER_REGEX, 'section-header'],
        [SCENE_HEADER_HIGHLIGHT_REGEX, 'scene-header'],
        [ACTION_LINE_HIGHLIGHT_REGEX, 'action'],
        [AUDIO_EVENT_REGEX, 'audio-event'],
        [UI_EVENT_REGEX, 'ui-event'],
        [SQUARE_BRACKET_NOTE_REGEX, 'bracket-note'],
        [FULLWIDTH_BRACKET_NOTE_REGEX, 'bracket-note'],
        [STAGE_DIRECTION_INLINE_REGEX, 'stage-direction'],
        [DIALOGUE_CHARACTER_HIGHLIGHT_REGEX, 'character'],
      ],
    },
  })

  monaco.editor.defineTheme('script-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'episode-header', foreground: 'F472B6', fontStyle: 'bold' },
      { token: 'section-header', foreground: 'FBBF24', fontStyle: 'bold' },
      { token: 'scene-header', foreground: 'F59E0B', fontStyle: 'bold' },
      { token: 'character', foreground: '60A5FA', fontStyle: 'bold' },
      { token: 'action', foreground: 'E5E7EB' },
      { token: 'audio-event', foreground: 'A78BFA', fontStyle: 'italic' },
      { token: 'ui-event', foreground: 'FB7185', fontStyle: 'italic' },
      { token: 'stage-direction', foreground: 'FCA5A5', fontStyle: 'italic' },
      { token: 'bracket-note', foreground: '94A3B8', fontStyle: 'italic' },
    ],
    colors: {
      'editor.background': '#151312',
      'editorLineNumber.foreground': '#5B5561',
      'editorLineNumber.activeForeground': '#F3F4F6',
      'editorGutter.background': '#151312',
      'editorCursor.foreground': '#F472B6',
      'editor.selectionBackground': '#3A2430',
    },
  })

  isRegistered = true
}
