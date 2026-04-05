import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { ArrowRightCircle } from 'lucide-react'
import { NodeToolbar } from './NodeToolbar'

export function TransitionNodeView({ selected, editor, getPos, deleteNode }: NodeViewProps) {
  return (
    <NodeViewWrapper>
      <div
        className={`transition-node group relative p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:border-l-4 border-orange-500 transition-all duration-200 ${
          selected ? 'ring-2 ring-orange-400 shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <NodeToolbar editor={editor} getPos={getPos} onDelete={deleteNode} />
        
        {/* Type label */}
        <div className="flex items-center gap-2 mb-2">
          <ArrowRightCircle className="w-4 h-4 text-orange-600" />
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
            转场
          </span>
        </div>
        
        {/* Transition content */}
        <div className="transition-content text-right uppercase font-bold">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
