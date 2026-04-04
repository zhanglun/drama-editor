// Model
export { useScriptStore, useCurrentScript, useScripts, useIsLoading, useError, useScriptById } from './model'
export type { ScriptStore } from './model'

// Types (re-export from shared)
export type { Script, ScriptContent, ScriptMetadata } from '../../shared/types/script'

// API
export { getScripts, getScript } from './api/get-scripts'
export { getScript as getScriptById } from './api/get-script'
export { createScript } from './api/create-script'
export { updateScript } from './api/update-script'
export { patchScript } from './api/patch-script'
export { deleteScript } from './api/delete-script'
export { duplicateScript } from './api/duplicate-script'

// UI
export { ScriptCard } from './ui/ScriptCard'
export { ScriptTitle } from './ui/ScriptTitle'
