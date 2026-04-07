import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useScriptStore } from '../stores/scriptStore'
import { useVersionStore } from '../entities/version/model/store'
import { DiffViewer } from '../features/diff-viewer/ui/DiffViewer'
import type { ScriptVersion } from '../types'
import { formatDate } from '../shared/lib/utils'
import { LoadingSpinner } from '../shared/ui/Loading/LoadingSpinner'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export function DiffPage() {
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
    // TODO: Migrate to version store (Phase 5)
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
          <LoadingSpinner />
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
  }

  const oldText = JSON.stringify(oldVersion.content, null, 2)
  const newText = JSON.stringify(newVersion.content, null, 2)

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
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
                  v{v.version_number} - {formatDate(v.created_at)}
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
                  v{v.version_number} - {formatDate(v.created_at)}
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
