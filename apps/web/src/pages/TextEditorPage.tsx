import {
  EpisodeDirectory,
  ScriptEditPanel,
  ScriptPreviewPanel,
  ScriptWorkspaceHeader,
  ScriptWorkspaceShell,
  useScriptWorkspaceController,
} from './text-editor'

export function TextEditorPage() {
  const {
    fileName,
    activeTab,
    content,
    episodes,
    activeEpisode,
    previewContent,
    stats,
    setActiveTab,
    selectEpisode,
    setContent,
    importFile,
  } = useScriptWorkspaceController()

  return (
    <div className="flex flex-col">
      <ScriptWorkspaceShell
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sidebar={(
          <EpisodeDirectory
            episodes={episodes}
            activeEpisodeId={activeEpisode?.id}
            onSelect={selectEpisode}
          />
        )}
        header={(
          <ScriptWorkspaceHeader
            fileName={fileName}
            episodeCount={episodes.length}
            stats={stats}
            onImport={importFile}
          />
        )}
        editPane={(
          <ScriptEditPanel
            content={content}
            onChange={setContent}
            revealLine={activeEpisode?.startLine}
            emptyStateStrategy="editable"
            onImport={importFile}
          />
        )}
        previewPane={(
          <ScriptPreviewPanel
            content={previewContent}
            revealLine={activeEpisode?.startLine}
          />
        )}
      />
    </div>
  )
}
