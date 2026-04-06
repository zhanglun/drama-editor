import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, X, Plus, Link2 } from 'lucide-react'
import { addSceneLinks, removeSceneLink } from '../api'

interface SceneLinkPanelProps {
  scriptId: string
  variantId: string
  currentSceneIds: string[]
  onLinksChange: () => void
}

export function SceneLinkPanel({
  scriptId,
  variantId,
  currentSceneIds,
  onLinksChange,
}: SceneLinkPanelProps) {
  const [newSceneId, setNewSceneId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAddScene = async () => {
    if (!newSceneId.trim()) return

    setIsLoading(true)
    setError(null)

    const response = await addSceneLinks(scriptId, variantId, [newSceneId.trim()])

    if (response.error) {
      setError(response.error)
      setIsLoading(false)
      return
    }

    setNewSceneId('')
    setIsLoading(false)
    onLinksChange()
  }

  const handleRemoveScene = async (sceneId: string) => {
    setIsLoading(true)
    setError(null)

    const response = await removeSceneLink(scriptId, variantId, sceneId)

    if (response.error) {
      setError(response.error)
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    onLinksChange()
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link2 className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">关联场景</span>
          {currentSceneIds.length > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
              {currentSceneIds.length}
            </span>
          )}
        </div>
      </div>

      {error && (
        <div className="px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded">
          {error}
        </div>
      )}

      {currentSceneIds.length > 0 ? (
        <div className="space-y-1">
          {currentSceneIds.map((sceneId) => (
            <div
              key={sceneId}
              className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded group"
            >
              <span className="text-sm text-gray-700 font-mono">{sceneId}</span>
              <div className="flex items-center gap-2">
                <Link
                  to={`/scripts/${scriptId}`}
                  className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                  title="跳转到编辑器"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleRemoveScene(sceneId)}
                  disabled={isLoading}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="移除场景链接"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-6 text-center text-sm text-gray-400">
          暂无关联场景
        </div>
      )}

      <div className="flex gap-2 mt-3">
        <input
          type="text"
          value={newSceneId}
          onChange={(e) => setNewSceneId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddScene()}
          placeholder="输入场景 ID"
          className="flex-1 text-xs border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={handleAddScene}
          disabled={isLoading || !newSceneId.trim()}
          className="flex items-center gap-1 text-xs bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-3 h-3" />
          <span>添加</span>
        </button>
      </div>
    </div>
  )
}
