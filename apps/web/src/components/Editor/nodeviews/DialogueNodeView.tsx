import { NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { BaseNodeView } from './BaseNodeView'

export function DialogueNodeView({ node, selected, updateAttributes, editor, getPos, deleteNode }: NodeViewProps) {
  const [character, setCharacter] = useState(node.attrs.character || '')
  const [parenthetical, setParenthetical] = useState(node.attrs.parenthetical || '')

  const handleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCharacter(value)
    updateAttributes({ character: value })
  }

  const handleParentheticalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setParenthetical(value)
    updateAttributes({ parenthetical: value })
  }

  return (
    <BaseNodeView
      label="对白"
      icon={MessageCircle}
      colorScheme="purple"
      selected={selected}
      editor={editor}
      getPos={getPos}
      deleteNode={deleteNode}
    >
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
    </BaseNodeView>
  )
}
