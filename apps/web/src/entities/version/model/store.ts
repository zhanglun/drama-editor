import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { ScriptVersion } from '../../../shared/types'
import * as api from '../api'
import { createAsyncActionFactory } from '../../../shared/lib/create-async-action'

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
      (set, get) => {
        const action = createAsyncActionFactory<VersionStore>(set)

        return {
          versions: [],
          currentVersion: null,
          isLoading: false,
          error: null,

          fetchVersions: (scriptId: string) => action(
            async () => {
              const response = await api.getVersions(scriptId)
              if (response.error) throw new Error(response.error)
              return response.data.sort((a, b) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
              )
            },
            (versions) => ({ versions, isLoading: false }),
            false,
          ) as Promise<void>,

          createVersion: (scriptId: string, content: ScriptVersion['content'], changeSummary?: string) => action(
            async () => {
              const response = await api.createVersion(scriptId, content, changeSummary)
              if (response.error) throw new Error(response.error)
              return response.data
            },
            (version) => ({
              versions: [...get().versions, version],
              currentVersion: version,
              isLoading: false,
            }),
          ) as Promise<ScriptVersion>,

          deleteVersion: (scriptId: string, versionId: string) => action(
            async () => {
              const response = await api.deleteVersion(scriptId, versionId)
              if (response.error) throw new Error(response.error)
              return versionId
            },
            (deletedId) => ({
              versions: get().versions.filter((v) => v.id !== deletedId),
              currentVersion: get().currentVersion?.id === deletedId
                ? null
                : get().currentVersion,
              isLoading: false,
            }),
          ) as Promise<void>,

          setCurrentVersion: (version) => set({ currentVersion: version }),
          setLoading: (loading) => set({ isLoading: loading }),
          setError: (error) => set({ error }),
        }
      },
      { name: 'version-store' }
    ),
    { name: 'version-storage' }
  )
)
