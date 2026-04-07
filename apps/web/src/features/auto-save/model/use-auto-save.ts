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

  const enabledRef = useRef(enabled)
  const scriptIdRef = useRef(scriptId)
  const contentRef = useRef(content)
  const isDirtyRef = useRef(state.isDirty)
  const onSaveStartRef = useRef(onSaveStart)
  const onSaveSuccessRef = useRef(onSaveSuccess)
  const onSaveErrorRef = useRef(onSaveError)

  useEffect(() => {
    enabledRef.current = enabled
    scriptIdRef.current = scriptId
    contentRef.current = content
    isDirtyRef.current = state.isDirty
    onSaveStartRef.current = onSaveStart
    onSaveSuccessRef.current = onSaveSuccess
    onSaveErrorRef.current = onSaveError
  }, [enabled, scriptId, content, state.isDirty, onSaveStart, onSaveSuccess, onSaveError])

  useEffect(() => {
    const currentContent = JSON.stringify(content)
    if (currentContent !== previousContentRef.current) {
      setState(prev => ({ ...prev, isDirty: true }))
      previousContentRef.current = currentContent
    }
  }, [content])

  const debouncedSave = useRef(
    debounce(async () => {
      if (!enabledRef.current || !isDirtyRef.current) return

      setState(prev => ({ ...prev, isSaving: true, error: null }))
      onSaveStartRef.current?.()

      try {
        await saveQueue.enqueue(scriptIdRef.current, contentRef.current)
        setState(prev => ({
          ...prev,
          isSaving: false,
          isDirty: false,
          lastSavedAt: new Date(),
        }))
        onSaveSuccessRef.current?.()
      } catch (error) {
        setState(prev => ({
          ...prev,
          isSaving: false,
          error: error as Error,
        }))
        onSaveErrorRef.current?.(error as Error)
      }
    }, debounceMs)
  ).current

  useEffect(() => {
    if (enabled && state.isDirty) {
      debouncedSave()
    }
  }, [enabled, state.isDirty, debouncedSave])

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
