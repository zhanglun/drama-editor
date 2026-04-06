import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Script, ScriptContent } from '../types'
import { extractCharacters } from '../utils/characterExtractor'

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error' | 'unsaved'

interface ScriptStore {
  scripts: Script[]
  currentScript: Script | null
  isLoading: boolean
  error: string | null
  saveStatus: SaveStatus
  lastSavedAt: Date | null
  hasUnsavedChanges: boolean

  loadScripts: () => Promise<void>
  loadScript: (id: string) => Promise<Script>
  createScript: (title: string) => Promise<Script>
  updateScript: (id: string, content: ScriptContent) => Promise<void>
  updateScriptMetadata: (id: string, metadata: Partial<Script>) => Promise<void>
  deleteScript: (id: string) => Promise<void>
  duplicateScript: (id: string) => Promise<Script>
  renameScript: (id: string, title: string) => Promise<void>
  setCurrentScript: (script: Script | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setSaveStatus: (status: SaveStatus) => void
  setHasUnsavedChanges: (hasChanges: boolean) => void
  markAsSaved: () => void
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export const useScriptStore = create<ScriptStore>()(
  devtools(
    persist(
      (set, get) => ({
        scripts: [],
        currentScript: null,
        isLoading: false,
        error: null,
        saveStatus: 'idle',
        lastSavedAt: null,
        hasUnsavedChanges: false,

        loadScripts: async () => {
          set({ isLoading: true, error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts`)
            if (!response.ok) throw new Error('Failed to load scripts')
            const scripts = await response.json()
            set({ scripts, isLoading: false })
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
          }
        },

        createScript: async (title: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                title,
                description: '',
                content: {
                  type: 'doc',
                  content: [],
                  characters: [],  // 初始化空数组
                  metadata: {}
                }
              })
            })
            if (!response.ok) throw new Error('Failed to create script')
            const script = await response.json()
            
            // 如果 content 存在但 characters 字段缺失,从内容中提取角色
            if (script.content && !script.content.characters) {
              script.content.characters = extractCharacters(script.content)
            }
            
            set((state) => ({ 
              scripts: [...state.scripts, script],
              currentScript: script,
              isLoading: false,
            }))
            return script
          } catch (error) {
            set({ error: (error as Error).message })
            throw error
          }
        },

        updateScript: async (id: string, content: ScriptContent) => {
          set({ saveStatus: 'saving', error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts/${id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ content }),
            })
            if (!response.ok) throw new Error('Failed to update script')
            const updatedScript = await response.json()
            set((state) => ({
              scripts: state.scripts.map((s) => 
                s.id === id ? updatedScript : s
              ),
              currentScript: state.currentScript?.id === id 
                ? updatedScript 
                : state.currentScript,
              saveStatus: 'saved',
              lastSavedAt: new Date(),
              hasUnsavedChanges: false,
            }))
          } catch (error) {
            set({ saveStatus: 'error', error: (error as Error).message })
            throw error
          }
        },

        updateScriptMetadata: async (id: string, metadata: Partial<Script>) => {
          set({ saveStatus: 'saving', error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts/${id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(metadata),
            })
            if (!response.ok) throw new Error('Failed to update metadata')
            const updatedScript = await response.json()
            set((state) => ({
              scripts: state.scripts.map((s) => 
                s.id === id ? updatedScript : s
              ),
              currentScript: state.currentScript?.id === id 
                ? updatedScript 
                : state.currentScript,
              saveStatus: 'saved',
              lastSavedAt: new Date(),
              hasUnsavedChanges: false,
            }))
          } catch (error) {
            set({ saveStatus: 'error', error: (error as Error).message })
            throw error
          }
        },

        deleteScript: async (id: string) => {
          set({ isLoading: true, error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts/${id}`, {
              method: 'DELETE',
            })
            if (!response.ok) throw new Error('Failed to delete script')
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
          set({ isLoading: true, error: null, saveStatus: 'idle', hasUnsavedChanges: false })
          try {
            const response = await fetch(`${API_BASE}/scripts/${id}`)
            if (!response.ok) throw new Error('Failed to load script')
            const script = await response.json()
            
            // 如果 content 存在但 characters 字段缺失，从内容中提取角色
            if (script.content && !script.content.characters) {
              script.content.characters = extractCharacters(script.content)
            }
            
            set({ currentScript: script, isLoading: false, saveStatus: 'saved', lastSavedAt: new Date() })
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
            
            const response = await fetch(`${API_BASE}/scripts`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                title: `Copy of ${originalScript.title}`,
                description: originalScript.description,
                content: originalScript.content,
              }),
            })
            if (!response.ok) throw new Error('Failed to duplicate script')
            const duplicatedScript = await response.json()
            
            set((state) => ({ 
              scripts: [...state.scripts, duplicatedScript],
              currentScript: duplicatedScript,
              isLoading: false,
              saveStatus: 'saved',
              lastSavedAt: new Date(),
              hasUnsavedChanges: false,
            }))
            return duplicatedScript
          } catch (error) {
            set({ error: (error as Error).message, isLoading: false })
            throw error
          }
        },

        renameScript: async (id: string, title: string) => {
          set({ saveStatus: 'saving', error: null })
          try {
            const response = await fetch(`${API_BASE}/scripts/${id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ title }),
            })
            if (!response.ok) throw new Error('Failed to rename script')
            const updatedScript = await response.json()
            
            set((state) => ({
              scripts: state.scripts.map((s) => 
                s.id === id ? updatedScript : s
              ),
              currentScript: state.currentScript?.id === id 
                ? updatedScript 
                : state.currentScript,
              saveStatus: 'saved',
              lastSavedAt: new Date(),
              hasUnsavedChanges: false,
            }))
          } catch (error) {
            set({ saveStatus: 'error', error: (error as Error).message })
            throw error
          }
        },

        setCurrentScript: (script) => set({ currentScript: script, hasUnsavedChanges: false }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
        setSaveStatus: (status) => set({ saveStatus: status }),
        setHasUnsavedChanges: (hasChanges) => set({ hasUnsavedChanges: hasChanges, saveStatus: hasChanges ? 'unsaved' : get().saveStatus }),
        markAsSaved: () => set({ saveStatus: 'saved', lastSavedAt: new Date(), hasUnsavedChanges: false }),
      }),
      { name: 'script-store' }
    ),
    { name: 'script-storage' }
  )
)
