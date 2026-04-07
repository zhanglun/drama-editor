import { useState } from 'react'
import { useScriptStore } from '../../script/model'
import type { ScriptContent } from '../../../shared/types'
import { updateCharactersInContent } from '../../../shared/lib/character-extractor'

export function CharacterList() {
  const { currentScript, updateScript } = useScriptStore()
  const [newCharacterName, setNewCharacterName] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingName, setEditingName] = useState('')

  const characters = currentScript?.content?.characters || []

  const getUpdatedContent = (updatedCharacters: string[]): ScriptContent => {
    const base = currentScript?.content
    return {
      type: 'doc',
      content: base?.content || [],
      characters: updatedCharacters,
      metadata: base?.metadata
    }
  }

  const handleAddCharacter = () => {
    if (!newCharacterName.trim() || !currentScript) return
    
    const updatedCharacters = [...characters, newCharacterName.trim()]
    const updatedContent = getUpdatedContent(updatedCharacters)
    
    updateScript(currentScript.id, updatedContent)
    setNewCharacterName('')
  }

  const handleEditCharacter = (index: number) => {
    setEditingId(index)
    setEditingName(characters[index])
  }

  const handleSaveEdit = (index: number) => {
    if (!editingName.trim() || !currentScript) {
      setEditingId(null)
      setEditingName('')
      return
    }
    
    const oldName = characters[index]
    const newName = editingName.trim()
    
    if (oldName !== newName) {
      const base = currentScript.content
      if (base?.content) {
        const updatedJsonContent = updateCharactersInContent(
          { type: 'doc', content: base.content },
          oldName,
          newName
        )
        
        const updatedCharacters = [...characters]
        updatedCharacters[index] = newName
        
        const updatedContent: ScriptContent = {
          type: 'doc',
          content: updatedJsonContent.content || [],
          characters: updatedCharacters,
          metadata: base.metadata
        }
        
        updateScript(currentScript.id, updatedContent)
      }
    }
    
    setEditingId(null)
    setEditingName('')
  }

  const handleDeleteCharacter = (index: number) => {
    if (!currentScript) return
    if (!confirm(`确定要删除角色 "${characters[index]}" 吗？`)) return
    
    const updatedCharacters = characters.filter((_: string, i: number) => i !== index)
    const updatedContent = getUpdatedContent(updatedCharacters)
    updateScript(currentScript.id, updatedContent)
  }

  if (!currentScript) {
    return (
      <div className="p-4 text-gray-500 text-center">
        请先选择一个剧本
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-white border-l border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">角色列表</h3>
        <p className="text-sm text-gray-500 mt-1">
          共 {characters.length} 个角色
        </p>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={newCharacterName}
            onChange={(e) => setNewCharacterName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddCharacter()
              }
            }}
            placeholder="添加新角色..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleAddCharacter}
            disabled={!newCharacterName.trim()}
            className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            添加
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {characters.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            暂无角色
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {characters.map((character: string, index: number) => (
              <li key={character} className="px-4 py-3 hover:bg-gray-50">
                {editingId === index ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleSaveEdit(index)
                        }
                        if (e.key === 'Escape') {
                          setEditingId(null)
                          setEditingName('')
                        }
                      }}
                      onBlur={() => handleSaveEdit(index)}
                      autoFocus
                      className="flex-1 px-2 py-1 border border-primary-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {character}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEditCharacter(index)}
                        className="p-1 text-gray-400 hover:text-primary-600"
                        title="编辑"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteCharacter(index)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="删除"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
