import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { Drama } from 'lucide-react'
import { NodeToolbar } from './NodeToolbar'

export function ActionNodeView({ selected, editor, getPos, deleteNode }: NodeViewProps) {
  return (
    <NodeViewWrapper>
      <div
        className={`action-node group relative p-4 bg-gradient-to-r from-green-50 to-green-100 dark:border-l-4 border-green-500 transition-all duration-200 ${
          selected ? 'ring-2 ring-green-400 shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <NodeToolbar editor={editor} getPos={getPos} onDelete={deleteNode} />
        
        {/* Type label */}
        <div className="flex items-center gap-2 mb-2">
          <Drama className="w-4 h-4 text-green-600" />
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
            动作
          </span>
        </div>
        
        {/* Action content */}
        <div className="action-content pl-2 border-l-2 border-green-300 bg-green-50/30 rounded-r">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
