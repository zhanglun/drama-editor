import { useEffect, useRef, useState, useCallback } from 'react'
import { debounce } from '../lib/debounce'
import { saveQueue } from './save-queue'
import type { ScriptContent } from '../../../shared/types'

export interface UseAutoSaveOptions {
  scriptId: string
  content: ScriptContent
  debounceMs?: number
  enabled?: boolean
  onSaveStart?: () => void
  onSaveSuccess?: () => void
  onSaveError?: (error: Error) => void
}

export interface AutoSaveState {
  isDirty: boolean
  isSaving: boolean
  lastSavedAt: Date | null
  error: Error | null
}

export function useAutoSave({
  scriptId,
  content,
  debounceMs = 3000,
  enabled = true,
  onSaveStart,
  onSaveSuccess,
  onSaveError,
}: UseAutoSaveOptions) {
  const [state, setState] = useState<AutoSaveState>({
    isDirty: false,
    isSaving: false,
    lastSavedAt: null,
    error: null,
  })

  const previousContentRef = useRef<string>(JSON.stringify(content))

  useEffect(() => {
    const currentContent = JSON.stringify(content)
    if (currentContent !== previousContentRef.current) {
      setState(prev => ({ ...prev, isDirty: true }))
      previousContentRef.current = currentContent
    }
  }, [content])

  const debouncedSave = useRef(
    debounce(async () => {
      if (!enabled || !state.isDirty) return

      setState(prev => ({ ...prev, isSaving: true, error: null }))
      onSaveStart?.()

      try {
        await saveQueue.enqueue(scriptId, content)
        setState(prev => ({
          ...prev,
          isSaving: false,
          isDirty: false,
          lastSavedAt: new Date(),
        }))
        onSaveSuccess?.()
      } catch (error) {
        setState(prev => ({
          ...prev,
          isSaving: false,
          error: error as Error,
        }))
        onSaveError?.(error as Error)
      }
    }, debounceMs)
  ).current

  useEffect(() => {
    if (enabled && state.isDirty) {
      debouncedSave()
    }
  }, [content, enabled, state.isDirty, debouncedSave])

  const forceSave = useCallback(async () => {
    if (!enabled) return

    setState(prev => ({ ...prev, isSaving: true, error: null }))
    onSaveStart?.()

    try {
      await saveQueue.enqueue(scriptId, content, true)
      setState(prev => ({
        ...prev,
        isSaving: false,
        isDirty: false,
        lastSavedAt: new Date(),
      }))
      onSaveSuccess?.()
    } catch (error) {
      setState(prev => ({
        ...prev,
        isSaving: false,
        error: error as Error,
      }))
      onSaveError?.(error as Error)
    }
  }, [scriptId, content, enabled, onSaveStart, onSaveSuccess, onSaveError])

  return {
    ...state,
    forceSave,
  }
}
