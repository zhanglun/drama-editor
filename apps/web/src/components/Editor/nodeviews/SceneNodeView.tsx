import { NodeViewWrapper } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'

import { Film } from 'lucide-react'
import { NodeToolbar } from './NodeToolbar'

export function SceneNodeView({ node, selected, updateAttributes, editor, getPos, deleteNode }: NodeViewProps) {
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    if (target.textContent) {
      updateAttributes({ heading: target.textContent })
    }
  }

  return (
    <NodeViewWrapper>
      <div
        className={`scene-node group relative p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:border-l-4 border-blue-500 transition-all duration-200 ${
          selected ? 'ring-2 ring-blue-400 shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <NodeToolbar editor={editor} getPos={getPos} onDelete={deleteNode} />
        
        {/* Type label */}
        <div className="flex items-center gap-2 mb-2">
          <Film className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            场景
          </span>
        </div>
        
        {/* Editable heading */}
        <div
          className="font-mono text-base"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
        >
          {node.attrs.heading as string}
        </div>
      </div>
    </NodeViewWrapper>
  )
}
