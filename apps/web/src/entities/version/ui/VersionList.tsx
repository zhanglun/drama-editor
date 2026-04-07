import { useEffect } from 'react'
import { useVersionStore } from '../model/store'
import type { ScriptVersion } from '../../../shared/types'
import { VersionBadge } from './VersionBadge'
import { formatDateTime } from '../../../shared/lib/utils'
import { LoadingSpinner } from '../../../shared/ui/Loading/LoadingSpinner'

interface VersionListProps {
  scriptId: string
  onSelectVersion?: (version: ScriptVersion) => void
}

export function VersionList({ scriptId, onSelectVersion }: VersionListProps) {
  const { versions, isLoading, error, fetchVersions } = useVersionStore()

  useEffect(() => {
    if (scriptId) {
      fetchVersions(scriptId)
    }
  }, [scriptId, fetchVersions])

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner size="sm" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-600">{error}</p>
      </div>
    )
  }

  if (versions.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p>暂无版本历史</p>
        <p className="mt-1 text-sm text-gray-400">
          点击「保存版本」按钮创建第一个版本
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {versions.map((version) => (
        <button
          key={version.id}
          onClick={() => onSelectVersion?.(version)}
          className="w-full rounded-lg border border-gray-200 bg-white p-3 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <VersionBadge version={version.version_number} />
              <span className="text-sm text-gray-500">
                {formatDateTime(version.created_at)}
              </span>
          </div>
          {version.change_summary && (
            <p className="mt-1 text-sm text-gray-600">{version.change_summary}</p>
          )}
        </button>
      ))}
    </div>
  )
}
