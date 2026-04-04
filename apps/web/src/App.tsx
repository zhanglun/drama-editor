import { ScriptList } from './components/ScriptList/ScriptList'

import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useScriptStore } from './stores/scriptStore'
import { useVersionStore } from './entities/version/model/store'
import { DiffViewer } from './features/diff-viewer/ui/DiffViewer'
import { ScriptEditor } from './components/Editor/ScriptEditor'
import { ScriptMetadataPanel } from './components/ScriptMetadataPanel'
import { CharacterPanel } from './components/Character'
import { useAutoSave } from './features/auto-save/model/use-auto-save'
import { PanelRightClose, PanelRight } from 'lucide-react'
import type { Script } from './types'
import type { ScriptVersion } from './types'
import type { ScriptContent } from './types'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-xl font-bold text-primary-600">
                  Drama Editor
                </Link>
                <nav className="flex space-x-4">
                  <Link
                    to="/scripts"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    剧本列表
                  </Link>
                  <Link
                    to="/scripts/new"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    新建剧本
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/scripts/new" element={<NewScriptPage />} />
            <Route path="/scripts/:id" element={<ScriptEditorPage />} />
            <Route path="/scripts/:id/versions" element={<VersionsPage />} />
            <Route path="/scripts/:id/versions/:versionId/diff" element={<DiffPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎使用 Drama Editor
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          专业的短剧剧本创作工具
        </p>
        <Link
          to="/scripts/new"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          开始创作
        </Link>
      </div>
    </div>
  )
}

function ScriptsPage() {
  return <ScriptList />
}

function NewScriptPage() {
  const { createScript } = useScriptStore()
  const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [isCreating, setIsCreating] = useState(false)

    const handleCreate = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!title.trim()) return

      setIsCreating(true)
      try {
        const script = await createScript(title.trim())
        navigate(`/scripts/${script.id}`)
      } catch (error) {
        console.error('Failed to create script:', error)
        setIsCreating(false)
      }
    }

    if (isCreating) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
            <p className="mt-2 text-sm text-gray-500">Creating script...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">新建剧本</h2>
          <p className="text-gray-600">为你的新剧本起个名字吧</p>
        </div>

        <form onSubmit={handleCreate} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              剧本标题
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="输入剧本标题..."
              className="block w-full rounded-md border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              autoFocus
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={!title.trim()}
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              创建剧本
            </button>
            <button
              type="button"
              onClick={() => navigate('/scripts')}
              className="inline-flex items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              取消
            </button>
          </div>
        </form>
      </div>
  )
}

function ScriptEditorPage() {
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

    const handleContentChange = useCallback((content: ScriptContent) => {
      setEditorContent(content)
    }, [])

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
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
        {/* Header */}
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
                Last modified: {new Date(currentScript.updated_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor */}
          <div className="flex-1 min-w-0">
            <ScriptEditor
              content={editorContent || undefined}
              onChange={handleContentChange}
            />
          </div>

          {/* Metadata panel */}
          {showMetadata && (
            <div className="w-96 border-l border-gray-200 bg-white overflow-y-auto">
              <ScriptMetadataPanel
                script={currentScript}
                onUpdate={handleMetadataUpdate}
              />
            </div>
          )}

          {/* Character panel */}
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

function VersionsPage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">版本历史</h2>
      <p className="text-gray-500">版本历史页面 - 待实现</p>
    </div>
  )
}

function DiffPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentScript, loadScript } = useScriptStore()
  const [oldVersion, setOldVersion] = useState<ScriptVersion | null>(null)
  const [newVersion, setNewVersion] = useState<ScriptVersion | null>(null)
    const { versions, fetchVersions, isLoading } = useVersionStore()

  useEffect(() => {
      if (id) {
        loadScript(id)
        fetchVersions(id)
      }
    }, [id, loadScript, fetchVersions])

    useEffect(() => {
      if (versions.length > 0 && !oldVersion && !newVersion) {
        setNewVersion(versions[0])
        if (versions.length > 1) {
          setOldVersion(versions[1])
        }
      }
    }, [versions, oldVersion, newVersion])

    const handleRestore = async () => {
      if (!oldVersion || !currentScript) return
      try {
        const response = await fetch(`${API_BASE}/scripts/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: oldVersion.content }),
        })
        if (!response.ok) throw new Error('Failed to restore version')
        navigate(`/scripts/${id}`)
      } catch (error) {
        console.error('Failed to restore version:', error)
      }
    }

    if (isLoading || !currentScript) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
            <p className="mt-2 text-sm text-gray-500">Loading...</p>
          </div>
        </div>
      )
    }

    if (!oldVersion || !newVersion) {
      return (
        <div className="px-4 py-6 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">版本对比</h2>
        <p className="text-gray-500">请选择两个版本进行对比</p>
      </div>
    )

    const oldText = JSON.stringify(oldVersion.content, null, 2)
    const newText = JSON.stringify(newVersion.content, null, 2)

    return (
      <div className="h-full flex flex-col">
        <div className="border-b border-gray-200 bg-white px-4 py-3">
          <div className="fix items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(`/scripts/${id}/versions`)}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">版本对比</h1>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={oldVersion.id}
                onChange={(e) => {
                  const v = versions.find(v => v.id === e.target.value)
                  if (v) setOldVersion(v)
                }}
                className="rounded-md border-gray-300 text-sm"
              >
                {versions.map(v => (
                  <option key={v.id} value={v.id}>
                    v{v.version_number} - {new Date(v.created_at).toLocaleDateString()}
                  </option>
                ))}
              </select>
              <span className="text-gray-400">vs</span>
              <select
                value={newVersion.id}
                onChange={(e) => {
                  const v = versions.find(v => v.id === e.target.value)
                  if (v) setNewVersion(v)
                }}
                className="rounded-md border-gray-300 text-sm"
              >
                {versions.map(v => (
                  <option key={v.id} value={v.id}>
                    v{v.version_number} - {new Date(v.created_at).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <DiffViewer
            oldText={oldText}
            newText={newText}
            oldTitle={`v${oldVersion.version_number}`}
            newTitle={`v${newVersion.version_number}`}
            onRestore={handleRestore}
          />
        </div>
      </div>
    )
  }
}

export default App
