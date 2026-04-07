import { useState, useEffect } from 'react'
import type { Character } from '../../shared/types/character'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

interface UseCharactersReturn {
  characters: Character[]
  isLoading: boolean
  error: string | null
}

// TODO: Use shared API client (Phase 5)
export function useCharacters(scriptId: string | undefined, isScriptLoaded: boolean): UseCharactersReturn {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!scriptId || !isScriptLoaded) return

    const fetchCharacters = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`${API_BASE}/scripts/${scriptId}/characters`)
        if (!response.ok) throw new Error('Failed to load characters')
        const data = await response.json()
        setCharacters(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCharacters()
  }, [scriptId, isScriptLoaded])

  return { characters, isLoading, error }
}
