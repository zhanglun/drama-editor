import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScriptStore } from '../../../entities/script'
import type { ScriptContent, Script } from '../../../shared/types'
import { updateCharactersInContent, extractCharacters } from '../../../shared/lib/character-extractor'

interface UseCharacterListReturn {
  characters: string[]
  newCharacterName: string
  setNewCharacterName: (name: string) => void
  editingId: number | null
  editingName: string
  setEditingName: (name: string) => void
  handleAddCharacter: () => void
  handleEditCharacter: (index: number) => void
  handleSaveEdit: (index: number) => void
  handleDeleteCharacter: (index: number) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, action: 'add' | 'save', index?: number) => void
  currentScript: Script | null
  navigate: ReturnType<typeof useNavigate>
}

export function useCharacterList(): UseCharacterListReturn {
  const { currentScript, updateScript } = useScriptStore()
  const navigate = useNavigate()
  const [newCharacterName, setNewCharacterName] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingName, setEditingName] = useState('')

  const characters = useMemo(() => {
    if (currentScript?.content?.characters && currentScript.content.characters.length > 0) {
      return currentScript.content.characters
    }
    return currentScript?.content ? extractCharacters(currentScript.content) : []
  }, [currentScript])

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, action: 'add' | 'save', index?: number) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (action === 'add') {
        handleAddCharacter()
      } else if (index !== undefined) {
        handleSaveEdit(index)
      }
    }
    if (e.key === 'Escape' && action === 'save') {
      setEditingId(null)
      setEditingName('')
    }
  }

  return {
    characters,
    newCharacterName,
    setNewCharacterName,
    editingId,
    editingName,
    setEditingName,
    handleAddCharacter,
    handleEditCharacter,
    handleSaveEdit,
    handleDeleteCharacter,
    handleKeyDown,
    currentScript,
    navigate,
  }
}
