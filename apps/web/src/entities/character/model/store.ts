import { create } from 'zustand'
import type { Character } from '../../../shared/types'

interface CharacterStore {
  characters: Character[]
  isLoading: boolean
  error: string | null
}

export const useCharacterStore = create<CharacterStore>(() => ({
  characters: [],
  isLoading: false,
  error: null,
}))
