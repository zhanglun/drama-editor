import { startTransition, useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import mammoth from 'mammoth'
import { extractEpisodeSegments } from './episode-directory'
import { getScriptStats } from './script-stats'

export type ScriptWorkspaceTab = 'edit' | 'preview'

export interface UseScriptWorkspaceControllerOptions {
  initialContent?: string
  initialFileName?: string
  initialTab?: ScriptWorkspaceTab
}

export function useScriptWorkspaceController(options: UseScriptWorkspaceControllerOptions = {}) {
  const {
    initialContent = '',
    initialFileName = '',
    initialTab = 'edit',
  } = options

  const [content, setContent] = useState(initialContent)
  const [fileName, setFileName] = useState(initialFileName)
  const [activeTab, setActiveTab] = useState<ScriptWorkspaceTab>(initialTab)
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0)

  const episodes = useMemo(() => extractEpisodeSegments(content), [content])
  const activeEpisode = episodes[Math.min(activeEpisodeIndex, episodes.length - 1)] ?? episodes[0] ?? null
  const previewContent = useDeferredValue(content)
  const stats = useMemo(() => getScriptStats(content), [content])
  const isEmpty = content.trim().length === 0

  useEffect(() => {
    if (activeEpisodeIndex > episodes.length - 1) {
      setActiveEpisodeIndex(Math.max(episodes.length - 1, 0))
    }
  }, [activeEpisodeIndex, episodes.length])

  const selectEpisode = useCallback((index: number) => {
    startTransition(() => {
      setActiveEpisodeIndex(index)
    })
  }, [])

  const handleTabChange = useCallback((tab: ScriptWorkspaceTab | string) => {
    startTransition(() => {
      setActiveTab(tab as ScriptWorkspaceTab)
    })
  }, [])

  const handleContentChange = useCallback((nextContent: string) => {
    setContent(nextContent)
  }, [])

  const importFile = useCallback(async (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase()

    if (extension === 'txt') {
      const text = await file.text()
      setContent(text)
    } else if (extension === 'docx') {
      const arrayBuffer = await file.arrayBuffer()
      const result = await mammoth.extractRawText({ arrayBuffer })
      setContent(result.value)
    }

    setFileName(file.name)
    setActiveEpisodeIndex(0)
    setActiveTab('edit')
  }, [])

  return {
    content,
    isEmpty,
    fileName,
    activeTab,
    episodes,
    activeEpisode,
    previewContent,
    stats,
    setActiveTab: handleTabChange,
    setContent: handleContentChange,
    selectEpisode,
    importFile,
  }
}
