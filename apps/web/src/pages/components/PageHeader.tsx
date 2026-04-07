import { Link } from 'react-router-dom'
import { ArrowLeft, LayoutGrid, Plus } from 'lucide-react'

interface PageHeaderProps {
  scriptId: string | undefined
  title: string
  onCreateCharacter: () => void
}

export function PageHeader({ scriptId, title, onCreateCharacter }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onCreateCharacter}
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <Plus className="h-4 w-4" />
            新角色
          </button>
          <div className="flex items-center gap-2 text-gray-500">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm">形象画布</span>
          </div>
          <Link
            to={`/scripts/${scriptId}`}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            返回编辑器
          </Link>
        </div>
      </div>
    </div>
  )
}
