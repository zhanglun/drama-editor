import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Script, ScriptContent } from './types'
import * as api from '../api'

interface ScriptStore {
  scripts: Script[]
  currentScript: Script | null
  isLoading: boolean
  error: string | null

  loadScripts: () => Promise<void>
  loadScript: (id: string) => Promise<Script>
  createScript: (title: string) => Promise<Script>
  updateScript: (id: string, content: ScriptContent) => Promise<void>
  deleteScript: (id: string) => Promise<void>
  duplicateScript: (id: string) => Promise<Script>
  renameScript: (id: string, title: string) => Promise<void>
  setCurrentScript: (script: Script | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useScriptStore = create<ScriptStore>()(
  devtools(
    persist(
      (set, get) => ({
        scripts: [],
        currentScript: null,
        isLoading: false,
        error: null,

        loadScripts: async () => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.getScripts()
            if (response.error) {
              throw new Error(response.error)
            }
            set({ scripts: response.data, isLoading: false })
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
          }
        },

        createScript: async (title: string) => {
          set({ isLoading: true, error: null })
          try {
            const script = await api.createScript(title)
            set((state) => ({ 
              scripts: [...state.scripts, script],
              currentScript: script,
              isLoading: false 
            }))
            return script
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        updateScript: async (id: string, content: ScriptContent) => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.updateScript(id, content)
            if (response.error) {
              throw new Error(response.error)
            }
            const updatedScript = response.data
            set((state) => ({
              scripts: state.scripts.map((s) => 
                s.id === id ? updatedScript : s
              ),
              currentScript: state.currentScript?.id === id 
                ? updatedScript 
                : state.currentScript,
              isLoading: false,
            }))
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        deleteScript: async (id: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.deleteScript(id)
            if (response.error) {
              throw new Error(response.error)
            }
            set((state) => ({
              scripts: state.scripts.filter((s) => s.id !== id),
              currentScript: state.currentScript?.id === id 
                ? null 
                : state.currentScript,
              isLoading: false,
            }))
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        loadScript: async (id: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.getScript(id)
            if (response.error) {
              throw new Error(response.error)
            }
            const script = response.data
            set({ currentScript: script, isLoading: false })
            return script
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        duplicateScript: async (id: string) => {
          set({ isLoading: true, error: null })
          try {
            const originalScript = get().scripts.find(s => s.id === id)
            if (!originalScript) throw new Error('Script not found')
            
            const duplicatedScript = await api.duplicateScript(originalScript)
            
            set((state) => ({ 
              scripts: [...state.scripts, duplicatedScript],
              currentScript: duplicatedScript,
              isLoading: false 
            }))
            return duplicatedScript
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        renameScript: async (id: string, title: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await api.patchScript(id, { title })
            if (response.error) {
              throw new Error(response.error)
            }
            const updatedScript = response.data
            
            set((state) => ({
              scripts: state.scripts.map((s) => 
                s.id === id ? updatedScript : s
              ),
              currentScript: state.currentScript?.id === id 
                ? updatedScript 
                : state.currentScript,
              isLoading: false,
            }))
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        setCurrentScript: (script) => set({ currentScript: script }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
      }),
      { name: 'script-store' }
    ),
    { name: 'script-storage' }
  )
)
