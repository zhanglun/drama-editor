import { useCharacterStore } from './store'

export { useCharacterStore }

export const useCharacters = () => useCharacterStore((state) => state.characters)

export const useIsLoading = () => useCharacterStore((state) => state.isLoading)
