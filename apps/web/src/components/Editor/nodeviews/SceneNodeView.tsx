import { NodeViewWrapper } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { useCallback } from 'react'

export function SceneNodeView({ node, selected, updateAttributes }: NodeViewProps) {
  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    if (target.textContent) {
      updateAttributes({ heading: target.textContent })
    }
  }, [updateAttributes])

  return (
    <NodeViewWrapper>
      <div
        className={`scene-heading p-4 bg-blue-50 border-l-4 border-blue-500 ${
          selected ? 'ring-2 ring-blue-300' : ''
        }`}
      >
        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          场景
        </div>
        <div
          className="font-mono text-sm"
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
