export interface Script {
  id: string
  title: string
  description: string | null
  content: ScriptContent | null
  created_at: string
  updated_at: string
  author?: string
  genre?: string
  logline?: string
  notes?: string
}

export interface ScriptContent {
  type: 'doc'
  content: ScriptNode[]
  characters?: string[]
  metadata?: ScriptMetadata
}

export interface ScriptNode {
  type: string
  content?: ScriptNode[]
  text?: string
  attrs?: Record<string, unknown>
  marks?: Array<{
    type: string
    attrs?: Record<string, unknown>
  }>
}

export interface ScriptMetadata {
  author?: string
  genre?: string
  logline?: string
  notes?: string
}

export interface Scene {
  id: string
  number: number
  heading: string
  description?: string
  elements: SceneElement[]
}

export type SceneElement =
  | { type: 'action'; text: string }
  | { type: 'dialogue'; character: string; parenthetical?: string; text: string }
  | { type: 'transition'; text: string }
