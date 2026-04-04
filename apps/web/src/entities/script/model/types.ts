import type { Script, ScriptContent } from '../../../shared/types'

export type { Script, ScriptContent }

export interface ScriptStore {
  scripts: Script[]
  currentScript: Script | null
  isLoading: boolean
  error: string | null
}
