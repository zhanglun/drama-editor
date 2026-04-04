import { useCallback, useRef, useState } from 'react'
import { useScriptStore } from '../../stores/scriptStore'
import type { ScriptContent } from '../../types'

const DEBOUNCE_DELAY = 3000 // 3 seconds

interface UseAutoSaveOptions {
  scriptId: string
  content: ScriptContent | null
}

export function useAutoSave({ scriptId, content }: UseAutoSaveOptions) {
  const store = useScriptStore()
  const timeoutRef = useRef<NodeJS.Timeout |null)
  const contentRef = useRef<ScriptContent | null)
  const isFirstChange = useRef(true)

  useEffect(() => {
    if (!content || !scriptId) return

    const timer = setTimeout(() => {
      if (content && scriptId) {
        store.setSaveStatus('saving')
        store.setHasUnsavedChanges(false)
        
        try {
          await store.updateScript(scriptId, content)
          if (isFirstChange.current) {
            toast.success('Script saved')
          }
          store.markAsSaved()
        } catch (error) {
          console.error('Failed to save script:', error)
          store.setSaveStatus('error')
          toast.error('Failed to save script')
        }
    }, [content, scriptId, store.setSaveStatus, store.updateScript, store.markAsSaved])

    return () => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [content, scriptId, store.setSaveStatus, store.updateScript, store.markAsSaved, toast.success, toast.error])
  })
}