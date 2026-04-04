import { FileText, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

interface EmptyScriptStateProps {
  onCreateNew?: () => void
}

export function EmptyScriptState({ onCreateNew }: EmptyScriptStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <FileText className="h-16 w-16 text-gray-300 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">暂无剧本</h3>
      <p className="text-sm text-gray-500 mb-6">
        开始创作你的第一个剧本吧
      </p>
      {onCreateNew ? (
        <button
          onClick={onCreateNew}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          创建剧本
        </button>
      ) : (
        <Link
          to="/scripts/new"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          创建剧本
        </Link>
      )}
    </div>
  )
}

export function EmptyEditorState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
      <FileText className="h-12 w-12 text-gray-300 mb-4" />
      <p className="text-sm text-gray-500">
        开始编写你的剧本内容...
      </p>
    </div>
  )
}
