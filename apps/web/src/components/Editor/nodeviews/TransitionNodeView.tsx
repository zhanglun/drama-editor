import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'

export function TransitionNodeView({ selected }: NodeViewProps) {
  return (
    <NodeViewWrapper>
      <div className={`transition-block my-4 ${selected ? 'ring-2 ring-orange-300' : ''}`}>
        <div className="transition-content text-right pr-4 uppercase font-bold">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
