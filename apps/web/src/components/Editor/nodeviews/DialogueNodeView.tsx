import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { useState, useCallback } from 'react'
import { MessageCircle } from 'lucide-react'
import { NodeToolbar } from './NodeToolbar'

export function DialogueNodeView({ node, selected, updateAttributes, editor, getPos, deleteNode }: NodeViewProps) {
  const [character, setCharacter] = useState(node.attrs.character || '')
  const [parenthetical, setParenthetical] = useState(node.attrs.parenthetical || '')

  const handleCharacterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCharacter(value)
    updateAttributes({ character: value })
  }, [updateAttributes])

  const handleParentheticalChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setParenthetical(value)
    updateAttributes({ parenthetical: value })
  }, [updateAttributes])

  return (
    <NodeViewWrapper>
      <div
        className={`dialogue-node group relative p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:border-l-4 border-purple-500 transition-all duration-200 ${
          selected ? 'ring-2 ring-purple-400 shadow-lg' : 'hover:shadow-md'
        }`}
      >
        <NodeToolbar editor={editor} getPos={getPos} onDelete={deleteNode} />
        
        {/* Type label */}
        <div className="flex items-center gap-2 mb-2">
          <MessageCircle className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
            对白
          </span>
        </div>
        
        {/* Character name */}
        <div className="character-name text-center font-bold text-sm mb-1">
          <input
            type="text"
            value={character}
            onChange={handleCharacterChange}
            placeholder="角色名"
            className="w-full text-center bg-transparent border-b-2 border-purple-300 hover:border-purple-500 focus:border-purple-600 focus:outline-none px-2 py-1 text-purple-900 font-semibold"
          />
        </div>
        
        {/* Parenthetical */}
        <div className="parenthetical-input text-center text-xs mb-2">
          <input
            type="text"
            value={parenthetical}
            onChange={handleParentheticalChange}
            placeholder="括号说明（可选）"
            className="w-48 text-center bg-transparent text-purple-700 italic text-xs border-b border-transparent hover:border-purple-300 focus:border-purple-500 focus:outline-none px-2"
          />
        </div>
        
        {/* Dialogue content */}
        <div className="dialogue-content pl-8 border-l-2 border-purple-300 bg-purple-50/30 rounded-r">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
