import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useScriptStore } from '../entities/script'
import { ScriptEditor } from '../components/Editor/ScriptEditor'
import { ScriptMetadataPanel } from '../components/ScriptMetadataPanel'
import { CharacterPanel } from '../components/Character'
import { useAutoSave } from '../features/auto-save/model/use-auto-save'
import { PanelRightClose, PanelRight } from 'lucide-react'
import type { Script, ScriptContent } from '../shared/types'
import { formatDate } from '../shared/lib/utils'
import { LoadingSpinner } from '../shared/ui/Loading/LoadingSpinner'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export function ScriptEditorPage() {
  const { id } = useParams<{ id: string }>()
  const { currentScript, loadScript, isLoading, error } = useScriptStore()
  const navigate = useNavigate()
  const [showMetadata, setShowMetadata] = useState(false)
  const [editorContent, setEditorContent] = useState<ScriptContent | null>(null)

  const [isCharacterPanelCollapsed, setIsCharacterPanelCollapsed] = useState(false)

  useEffect(() => {
    if (id) {
      loadScript(id)
    }
  }, [id, loadScript])

  useEffect(() => {
    if (error) {
      console.error('Failed to load script:', error)
    }
  }, [error])

  useEffect(() => {
    if (currentScript?.content) {
      setEditorContent(currentScript.content)
    }
  }, [currentScript?.content])

  const { isSaving, isDirty, lastSavedAt, error: saveError, forceSave } = useAutoSave({
    scriptId: currentScript?.id || '',
    content: editorContent || { type: 'doc', content: [] },
    debounceMs: 500,
    enabled: !!currentScript,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        forceSave()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [forceSave])

  const handleContentChange = (content: ScriptContent) => {
    setEditorContent(content)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-2 text-sm text-gray-500">Loading script...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0 11 0 0118 0" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Error loading script</h3>
          <p className="mt-1 text-sm text-gray-500">{error}</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => navigate('/scripts')}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Back to scripts
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentScript) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-sm text-gray-500">Script not found</p>
        </div>
      </div>
    )
  }

  const handleMetadataUpdate = async (metadata: Partial<Script>) => {
    // TODO: Migrate to script store (Phase 5)
    try {
      const response = await fetch(`${API_BASE}/scripts/${currentScript.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metadata),
      })
      
      if (!response.ok) throw new Error('Failed to update metadata')
      
      const updatedScript = await response.json()
      
      useScriptStore.setState(state => ({
        scripts: state.scripts.map(s => 
          s.id === currentScript.id ? updatedScript : s
        ),
        currentScript: updatedScript
      }))
      
      setShowMetadata(false)
    } catch (error) {
      console.error('Failed to update metadata:', error)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/scripts')}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">{currentScript.title}</h1>
            <button
              onClick={() => setShowMetadata(!showMetadata)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {showMetadata ? 'Hide' : 'Show'} metadata
            </button>
            <button
              onClick={() => setIsCharacterPanelCollapsed(!isCharacterPanelCollapsed)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              title={isCharacterPanelCollapsed ? '展开角色面板' : '收起角色面板'}
            >
              {isCharacterPanelCollapsed ? (
                <>
                  <PanelRight className="w-4 h-4" />
                  <span>展开</span>
                </>
              ) : (
                <>
                  <PanelRightClose className="w-4 h-4" />
                  <span>收起</span>
                </>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2">
            {isSaving && (
              <span className="text-sm text-blue-600 animate-pulse">保存中...</span>
            )}
            {!isSaving && !isDirty && lastSavedAt && (
              <span className="text-sm text-green-600">已保存</span>
            )}
            {saveError && (
              <span className="text-sm text-red-600" title={saveError.message}>保存失败</span>
            )}
            <span className="text-sm text-gray-500">
              Last modified: {formatDate(currentScript.updated_at)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 min-w-0">
          <ScriptEditor
            key={id}
            content={editorContent || undefined}
            onChange={handleContentChange}
          />
        </div>

        {showMetadata && (
          <div className="w-96 border-l border-gray-200 bg-white overflow-y-auto">
            <ScriptMetadataPanel
              script={currentScript}
              onUpdate={handleMetadataUpdate}
            />
          </div>
        )}

        <div 
          className={`border-l border-gray-200 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            isCharacterPanelCollapsed ? 'w-12' : 'w-80'
          }`}
        >
          {isCharacterPanelCollapsed ? (
            <div className="h-full flex flex-col items-center py-4">
              <button
                onClick={() => setIsCharacterPanelCollapsed(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                title="展开角色面板"
              >
                <PanelRight className="w-5 h-5" />
              </button>
              <span className="mt-2 text-xs text-gray-400 writing-mode-vertical">角色</span>
            </div>
          ) : (
            <CharacterPanel />
          )}
        </div>
      </div>
    </div>
  )
}
