import { useVersionStore } from './store'

export { useVersionStore }

export const useVersions = () => useVersionStore((state) => state.versions)

export const useCurrentVersion = () => useVersionStore((state) => state.currentVersion)

export const useIsLoading = () => useVersionStore((state) => state.isLoading)
