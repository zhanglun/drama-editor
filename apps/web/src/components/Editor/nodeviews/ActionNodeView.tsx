import { NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { Drama } from 'lucide-react'
import { BaseNodeView } from './BaseNodeView'

export function ActionNodeView({ selected, editor, getPos, deleteNode }: NodeViewProps) {
  return (
    <BaseNodeView
      label="动作"
      icon={Drama}
      colorScheme="green"
      selected={selected}
      editor={editor}
      getPos={getPos}
      deleteNode={deleteNode}
    >
      {/* Action content */}
      <div className="action-content pl-2 border-l-2 border-green-300 bg-green-50/30 rounded-r">
        <NodeViewContent className="outline-none" />
      </div>
    </BaseNodeView>
  )
}
