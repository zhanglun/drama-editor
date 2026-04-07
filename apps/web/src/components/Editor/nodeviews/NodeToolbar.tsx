import { useState } from 'react'
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react'
import type { Editor } from '@tiptap/core'

interface NodeToolbarProps {
  editor: Editor
  getPos: () => number | undefined
  onDelete: () => void
}

export function NodeToolbar({ editor, getPos, onDelete }: NodeToolbarProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const handleMoveUp = () => {
    const pos = getPos()
    if (pos === undefined) return
    
    const { state, dispatch } = editor.view
    const $pos = state.doc.resolve(pos)
    
    const nodeSize = $pos.nodeAfter?.nodeSize || 0
    if (!nodeSize) return

    const prevNodePos = pos - 1
    if (prevNodePos <= 0) return

    const $prevPos = state.doc.resolve(prevNodePos)
    const prevNode = $prevPos.nodeBefore
    if (!prevNode) return

    const tr = state.tr
    const currentNode = state.doc.nodeAt(pos)
    if (!currentNode) return

    tr.delete(pos, pos + nodeSize)
    tr.insert(prevNodePos, currentNode)

    dispatch(tr)
    editor.commands.focus(prevNodePos + 1)
  }

  const handleMoveDown = () => {
    const pos = getPos()
    if (pos === undefined) return
    
    const { state, dispatch } = editor.view
    const $pos = state.doc.resolve(pos)
    
    const currentNode = $pos.nodeAfter
    if (!currentNode) return
    const nodeSize = currentNode.nodeSize

    const nextNodePos = pos + nodeSize
    if (nextNodePos >= state.doc.content.size) return

    const $nextPos = state.doc.resolve(nextNodePos)
    const nextNode = $nextPos.nodeAfter
    if (!nextNode) return

    const nextNodeSize = nextNode.nodeSize

    const tr = state.tr
    
    tr.delete(nextNodePos, nextNodePos + nextNodeSize)
    tr.insert(pos, nextNode)

    dispatch(tr)
    editor.commands.focus(pos + nextNodeSize + 1)
  }

  const canMoveUp = () => {
    const pos = getPos()
    return pos !== undefined && pos > 1
  }

  const canMoveDown = () => {
    const pos = getPos()
    if (pos === undefined) return false
    
    const { state } = editor.view
    const $pos = state.doc.resolve(pos)
    const currentNode = $pos.nodeAfter
    if (!currentNode) return false
    
    const nextNodePos = pos + currentNode.nodeSize
    return nextNodePos < state.doc.content.size
  }

  const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(text)}
      onMouseLeave={() => setShowTooltip(null)}
    >
      {children}
      {showTooltip === text && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded whitespace-nowrap z-10">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
        </div>
      )}
    </div>
  )

  return (
    <div className="absolute -top-10 right-0 flex items-center gap-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <Tooltip text="上移">
        <button
          onClick={handleMoveUp}
          disabled={!canMoveUp()}
          className={`p-1.5 rounded transition-colors ${
            canMoveUp()
              ? 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
              : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
          aria-label="上移节点"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </Tooltip>

      <Tooltip text="下移">
        <button
          onClick={handleMoveDown}
          disabled={!canMoveDown()}
          className={`p-1.5 rounded transition-colors ${
            canMoveDown()
              ? 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
              : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
          aria-label="下移节点"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </Tooltip>

      <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />

      <Tooltip text="删除">
        <button
          onClick={onDelete}
          className="p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          aria-label="删除节点"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </Tooltip>
    </div>
  )
}
