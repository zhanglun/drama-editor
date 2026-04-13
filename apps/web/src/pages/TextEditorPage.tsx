import {
  EpisodeSidebar,
  MonacoScriptEditor,
  ScriptPreview,
  ScriptWorkspaceHeader,
  ScriptWorkspaceShell,
  useTextEditorWorkspace,
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
    onTabChange,
    onEpisodeSelect,
    onContentChange,
    onFileImport,
  } = useTextEditorWorkspace()

  return (
    <div className="flex flex-col">
      <ScriptWorkspaceShell
        activeTab={activeTab}
        onTabChange={onTabChange}
        sidebar={(
          <EpisodeSidebar
            episodes={episodes}
            activeEpisodeId={activeEpisode?.id}
            onSelect={onEpisodeSelect}
          />
        )}
        header={(
          <ScriptWorkspaceHeader
            fileName={fileName}
            episodeCount={episodes.length}
            stats={stats}
            onImport={onFileImport}
          />
        )}
        editPane={(
          <MonacoScriptEditor
            value={content}
            onChange={onContentChange}
            revealLine={activeEpisode?.startLine}
          />
        )}
        previewPane={(
          <div className="h-full overflow-hidden rounded-xl border border-[#33282e] bg-[#1a1618]">
            <ScriptPreview
              content={previewContent}
              className="h-full overflow-y-auto px-5 py-5"
              revealLine={activeEpisode?.startLine}
            />
          </div>
        )}
      />
    </div>
  )
}
