import { useScriptStore } from './store'

export const useCurrentScript = () => useScriptStore((state) => state.currentScript)

export const useScripts = () => useScriptStore((state) => state.scripts)

export const useIsLoading = () => useScriptStore((state) => state.isLoading)

export const useError = () => useScriptStore((state) => state.error)

export const useScriptById = (id: string) => 
  useScriptStore((state) => state.scripts.find((s) => s.id === id))
