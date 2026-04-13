import {
  ACTION_LINE_PARSE_REGEX,
  AUDIO_EVENT_REGEX,
  CHARACTERS_LINE_REGEX,
  DIALOGUE_LINE_PARSE_REGEX,
  FULLWIDTH_BRACKET_NOTE_REGEX,
  SCENE_HEADER_PARSE_REGEX,
  SQUARE_BRACKET_NOTE_REGEX,
  UI_EVENT_REGEX,
} from './script-syntax'

export interface Scene {
  id: string
  number: string
  timeOfDay: string
  interior: string
  location: string
  characters: string[]
  blocks: ScriptBlock[]
}

export type ScriptBlock =
  | { type: 'dialogue'; character: string; stageDirection: string; text: string }
  | { type: 'action'; text: string }
  | { type: 'audioEvent'; label: string; text: string }
  | { type: 'uiEvent'; label: string; text: string }
  | { type: 'bracketNote'; text: string }

const BLANK_LINE_REGEX = /^\s*$/

export function parseScript(text: string): Scene[] {
  const lines = text.split('\n')
  const scenes: Scene[] = []
  let currentScene: Scene | null = null
  let sceneCounter = 0

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()
    const trimmed = line.trim()

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
      }
      scenes.push(currentScene)
      continue
    }

    if (!currentScene) {
      sceneCounter++
      currentScene = {
        id: `scene-${sceneCounter}`,
        number: '1-1',
        timeOfDay: '',
        interior: '',
        location: '',
        characters: [],
        blocks: [],
      }
      scenes.push(currentScene)
    }

    const charactersMatch = trimmed.match(CHARACTERS_LINE_REGEX)
    if (charactersMatch) {
      currentScene.characters = charactersMatch[1].split(/[、,，]/).map(s => s.trim()).filter(Boolean)
      continue
    }

    const audioEventMatch = trimmed.match(AUDIO_EVENT_REGEX)
    if (audioEventMatch) {
      currentScene.blocks.push({
        type: 'audioEvent',
        label: audioEventMatch[1].trim(),
        text: audioEventMatch[2].trim(),
      })
      continue
    }

    const uiEventMatch = trimmed.match(UI_EVENT_REGEX)
    if (uiEventMatch) {
      currentScene.blocks.push({
        type: 'uiEvent',
        label: uiEventMatch[1].trim(),
        text: uiEventMatch[2].trim(),
      })
      continue
    }

    if (SQUARE_BRACKET_NOTE_REGEX.test(trimmed) || FULLWIDTH_BRACKET_NOTE_REGEX.test(trimmed)) {
      currentScene.blocks.push({ type: 'bracketNote', text: trimmed })
      continue
    }

    const actionMatch = trimmed.match(ACTION_LINE_PARSE_REGEX)
    if (actionMatch) {
      currentScene.blocks.push({ type: 'action', text: actionMatch[1].trim() })
      continue
    }

    const dialogueMatch = trimmed.match(DIALOGUE_LINE_PARSE_REGEX)
    if (dialogueMatch && dialogueMatch[1].length <= 20) {
      currentScene.blocks.push({
        type: 'dialogue',
        character: dialogueMatch[1].trim(),
        stageDirection: dialogueMatch[2]?.trim() ?? '',
        text: dialogueMatch[3]?.trim() ?? '',
      })
      continue
    }

    currentScene.blocks.push({ type: 'action', text: trimmed })
  }

  return scenes
}
