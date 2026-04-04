import type { ScriptContent } from './script'

export interface ScriptVersion {
  id: string
  script_id: string
  version_number: number
  content: ScriptContent
  change_summary: string | null
  created_at: string
}

export interface DiffResult {
  type: 'added' | 'removed' | 'unchanged'
  value: string
  lineNumber?: number
}

export type DiffMode = 'line' | 'word' | 'character'
