import { startTransition, useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import mammoth from 'mammoth'
import { extractEpisodeSegments } from './episode-directory'
import { getScriptStats } from './script-stats'

export type TextEditorTab = 'edit' | 'preview'

export function useTextEditorWorkspace() {
  const [content, setContent] = useState('')
  const [fileName, setFileName] = useState('')
  const [activeTab, setActiveTab] = useState<TextEditorTab>('edit')
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0)

  const episodes = useMemo(() => extractEpisodeSegments(content), [content])
  const activeEpisode = episodes[Math.min(activeEpisodeIndex, episodes.length - 1)] ?? episodes[0]
  const deferredContent = useDeferredValue(content)
  const stats = useMemo(() => getScriptStats(content), [content])

  useEffect(() => {
    if (activeEpisodeIndex > episodes.length - 1) {
      setActiveEpisodeIndex(Math.max(episodes.length - 1, 0))
    }
  }, [activeEpisodeIndex, episodes.length])

  const handleEpisodeSelect = useCallback((index: number) => {
    startTransition(() => {
      setActiveEpisodeIndex(index)
    })
  }, [])

  const handleTabChange = useCallback((tab: string) => {
    startTransition(() => {
      setActiveTab(tab as TextEditorTab)
    })
  }, [])

  const handleContentChange = useCallback((nextContent: string) => {
    setContent(nextContent)
  }, [])

  const handleFileImport = useCallback(async (file: File) => {
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
    fileName,
    activeTab,
    content,
    episodes,
    activeEpisode,
    previewContent: deferredContent,
    stats,
    setContent,
    onTabChange: handleTabChange,
    onEpisodeSelect: handleEpisodeSelect,
    onContentChange: handleContentChange,
    onFileImport: handleFileImport,
  }
}
