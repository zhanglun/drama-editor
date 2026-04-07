import { LayoutGrid } from 'lucide-react'

export function EmptyDetailState() {
  return (
    <div className="p-6 flex-1 flex flex-col items-center justify-center">
      <div className="text-gray-400 mb-4">
        <LayoutGrid className="h-12 w-12 mx-auto" />
      </div>
      <p className="text-sm text-gray-500">选择节点进行编辑</p>
      <p className="text-xs text-gray-400 mt-2">
        点击画布中的节点<br />查看详情并进行编辑
      </p>
    </div>
  )
}
