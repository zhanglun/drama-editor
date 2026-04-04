import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/core'
import { useState, useCallback } from 'react'

export function DialogueNodeView({ node, selected, updateAttributes }: NodeViewProps) {
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
      <div className={`dialogue-block my-2 ${selected ? 'ring-2 ring-purple-300' : ''}`}>
        <div className="character-name text-center font-bold text-sm mb-1">
          <input
            type="text"
            value={character}
            onChange={handleCharacterChange}
            placeholder="角色名"
            className="w-full text-center bg-transparent border-b border-transparent hover:border-gray-300 focus:border-purple-500 focus:outline-none px-2"
          />
        </div>
        <div className="parenthetical-input text-center text-xs mb-1">
          <input
            type="text"
            value={parenthetical}
            onChange={handleParentheticalChange}
            placeholder="括号说明（可选）"
            className="w-48 text-center bg-transparent text-gray-600 italic text-xs border-b border-transparent hover:border-gray-300 focus:border-purple-500 focus:outline-none px-2"
          />
        </div>
        <div className="dialogue-content pl-8 border-l-2 border-gray-200">
          <NodeViewContent className="outline-none" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}
