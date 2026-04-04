import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'

export function ActionNodeView({ selected }: NodeViewProps) {
  return (
    <NodeViewWrapper>
      <div className={`action-block my-2 ${selected ? 'ring-2 ring-green-300' : ''}`}>
        <div className="action-content">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
