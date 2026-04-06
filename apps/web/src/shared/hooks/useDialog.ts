import { useState, useCallback } from 'react'

interface UseDialogOptions {
  onConfirm?: () => Promise<void> | void
}

interface UseDialogReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  isLoading: boolean
  error: string | null
  confirm: () => Promise<void>
}

export function useDialog(options: UseDialogOptions = {}): UseDialogReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const open = useCallback(() => {
    setIsOpen(true)
    setError(null)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setError(null)
    setIsLoading(false)
  }, [])

  const confirm = useCallback(async () => {
    if (!options.onConfirm) {
      close()
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      await options.onConfirm()
      close()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      setIsLoading(false)
    }
  }, [options, close])

  return {
    isOpen,
    open,
    close,
    isLoading,
    error,
    confirm,
  }
}
