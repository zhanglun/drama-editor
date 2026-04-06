import { Pencil, Trash2, Plus, Link } from 'lucide-react'

interface CanvasToolbarProps {
  nodeId: string
  onEdit: () => void
  onDelete: () => void
  onAddChild: () => void
  onLinkScene?: () => void
}

export function CanvasToolbar({ onEdit, onDelete, onAddChild, onLinkScene }: CanvasToolbarProps) {
  return (
    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-lg border border-gray-200 bg-white shadow-md p-1">
      <button
        onClick={onEdit}
        className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
        title="编辑"
      >
        <Pencil className="w-4 h-4" />
      </button>

      <button
        onClick={onAddChild}
        className="p-2 rounded-md hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-colors"
        title="添加子形象"
      >
        <Plus className="w-4 h-4" />
      </button>

      {onLinkScene && (
        <button
          onClick={onLinkScene}
          className="p-2 rounded-md hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-colors"
          title="关联场景"
        >
          <Link className="w-4 h-4" />
        </button>
      )}

      <div className="w-px h-5 bg-gray-200" />

      <button
        onClick={onDelete}
        className="p-2 rounded-md hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors"
        title="删除"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
