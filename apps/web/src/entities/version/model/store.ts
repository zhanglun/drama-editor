import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { ScriptVersion } from '../../../shared/types'
import * as api from '../api'

interface VersionStore {
  versions: ScriptVersion[]
  currentVersion: ScriptVersion | null
  isLoading: boolean
  error: string | null

  fetchVersions: (scriptId: string) => Promise<void>
  createVersion: (scriptId: string, content: ScriptVersion['content'], changeSummary?: string) => Promise<ScriptVersion>
  deleteVersion: (scriptId: string, versionId: string) => Promise<void>
  setCurrentVersion: (version: ScriptVersion | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useVersionStore = create<VersionStore>()(
  devtools(
    persist(
      (set) => ({
        versions: [],
        currentVersion: null,
        isLoading: false,
        error: null,

        fetchVersions: async (scriptId: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.getVersions(scriptId)
            if (response.error) {
              throw new Error(response.error)
            }
            const versions = response.data.sort((a, b) =>
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            )
            set({ versions, isLoading: false })
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
          }
        },

        createVersion: async (scriptId: string, content: ScriptVersion['content'], changeSummary?: string) => {
          set({ isLoading: true, error: null })
          try {
            const version = await api.createVersion(scriptId, content, changeSummary)
            set((state) => ({
              versions: [...state.versions, version],
              currentVersion: version,
              isLoading: false,
            }))
            return version
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        deleteVersion: async (scriptId: string, versionId: string): Promise<void> => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.deleteVersion(scriptId, versionId)
            if (response.error) {
              throw new Error(response.error)
            }
            set((state) => ({
              versions: state.versions.filter((v) => v.id !== versionId),
              currentVersion: state.currentVersion?.id === versionId
                ? null
                : state.currentVersion,
              isLoading: false,
            }))
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        setCurrentVersion: (version) => set({ currentVersion: version }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
      }),
      { name: 'version-store' }
    ),
    { name: 'version-storage' }
  )
)
