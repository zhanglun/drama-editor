import type { NodeViewProps } from '@tiptap/core'
import { Film } from 'lucide-react'
import { BaseNodeView } from './BaseNodeView'

export function SceneNodeView({ node, selected, updateAttributes, editor, getPos, deleteNode }: NodeViewProps) {
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    if (target.textContent) {
      updateAttributes({ heading: target.textContent })
    }
  }

  return (
    <BaseNodeView
      label="场景"
      icon={Film}
      colorScheme="blue"
      selected={selected}
      editor={editor}
      getPos={getPos}
      deleteNode={deleteNode}
    >
      <div
        className="font-mono text-base"
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
      >
        {node.attrs.heading as string}
      </div>
    </BaseNodeView>
  )
}
