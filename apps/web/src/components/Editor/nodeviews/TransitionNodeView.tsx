import { NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { ArrowRightCircle } from 'lucide-react'
import { BaseNodeView } from './BaseNodeView'

export function TransitionNodeView({ selected, editor, getPos, deleteNode }: NodeViewProps) {
  return (
    <BaseNodeView
      label="转场"
      icon={ArrowRightCircle}
      colorScheme="orange"
      selected={selected}
      editor={editor}
      getPos={getPos}
      deleteNode={deleteNode}
    >
      {/* Transition content */}
      <div className="transition-content text-right uppercase font-bold">
        <NodeViewContent className="outline-none" />
      </div>
    </BaseNodeView>
  )
}
