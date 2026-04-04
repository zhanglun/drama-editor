export { useCharacterStore } from './store'

export const useCharacters = () => useCharacterStore((state) => state.characters)

export const useIsLoading = () => useCharacterStore((state) => state.isLoading)
