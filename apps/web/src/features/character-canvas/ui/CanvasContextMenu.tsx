import { useEffect, useRef } from 'react'

interface CanvasContextMenuProps {
  x: number
  y: number
  nodeId: string | null
  nodeType: 'character' | 'variant' | null
  onEdit: () => void
  onDelete: () => void
  onAddChild: () => void
  onClose: () => void
}

export function CanvasContextMenu({ x, y, onEdit, onDelete, onAddChild, onClose }: CanvasContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="fixed z-50 rounded-lg border border-gray-200 bg-white shadow-lg py-1 min-w-[140px]"
      style={{ left: x, top: y }}
    >
      <button
        onClick={onEdit}
        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
      >
        编辑
      </button>
      <button
        onClick={onAddChild}
        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
      >
        添加子形象
      </button>
      <div className="my-1 h-px bg-gray-100" />
      <button
        onClick={onDelete}
        className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
      >
        删除
      </button>
    </div>
  )
}
