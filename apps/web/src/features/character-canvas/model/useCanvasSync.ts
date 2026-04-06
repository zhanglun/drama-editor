import { useEffect, useRef, useCallback } from 'react'
import { useCanvasStore } from './store'
import { debounce } from '../../../shared/lib/utils'

export function useCanvasSync(scriptId: string | null) {
  const syncToServer = useCanvasStore((s) => s.syncToServer)
  const isDirty = useCanvasStore((s) => s.isDirty)

  const debouncedSync = useRef(
    debounce(() => {
      syncToServer()
    }, 2000),
  ).current

  useEffect(() => {
    if (isDirty && scriptId) {
      debouncedSync()
    }
  }, [isDirty, scriptId, debouncedSync])

  const forceSync = useCallback(async () => {
    await syncToServer()
  }, [syncToServer])

  return { forceSync }
}
