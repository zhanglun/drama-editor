export {
  extractEpisodeSegments,
  getScriptStats,
  parseScript,
  ScriptWorkspaceProvider,
  useScriptWorkspaceContext,
  useScriptWorkspaceController,
} from './model'
export type {
  EpisodeSegment,
  Scene,
  ScriptBlock,
  ScriptStats,
  ScriptWorkspaceTab,
  UseScriptWorkspaceControllerOptions,
} from './model'

export {
  EpisodeDirectory,
  MonacoScriptEditor,
  registerScriptMonaco,
  ScriptPreview,
} from './ui/primitives'

export {
  ScriptEditPanel,
  ScriptImportEmptyState,
  ScriptPreviewPanel,
  ScriptWorkspaceHeader,
} from './ui/panels'
export type { ScriptEditPanelEmptyStateStrategy } from './ui/panels'

export { ScriptWorkspaceShell } from './ui/workspace'
