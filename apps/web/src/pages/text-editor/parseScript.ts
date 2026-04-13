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
  | { type: 'soundEffect'; text: string }

const SCENE_HEADER_REGEX = /^(\d+-\d+)\s+(晨|早|上午|中午|午|下午|傍晚|晚|夜|凌晨|深夜|白天)\s+(内|外|内外|内景|外景)\s+(.+)$/
const CHARACTERS_REGEX = /^出场人物[：:]\s*(.+)$/
const SOUND_EFFECT_REGEX = /^\[音效[：:](.+)\]$/
const ACTION_REGEX = /^▲\s*(.+)$/
const DIALOGUE_REGEX = /^([^\s：:]+)[：:]\s*(?:[（(]([^）)]+)[）)])?\s*(.*)$/
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

    const sceneMatch = trimmed.match(SCENE_HEADER_REGEX)
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

    const charactersMatch = trimmed.match(CHARACTERS_REGEX)
    if (charactersMatch) {
      currentScene.characters = charactersMatch[1].split(/[、,，]/).map(s => s.trim()).filter(Boolean)
      continue
    }

    const soundMatch = trimmed.match(SOUND_EFFECT_REGEX)
    if (soundMatch) {
      currentScene.blocks.push({ type: 'soundEffect', text: soundMatch[1].trim() })
      continue
    }

    const actionMatch = trimmed.match(ACTION_REGEX)
    if (actionMatch) {
      currentScene.blocks.push({ type: 'action', text: actionMatch[1].trim() })
      continue
    }

    const dialogueMatch = trimmed.match(DIALOGUE_REGEX)
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
