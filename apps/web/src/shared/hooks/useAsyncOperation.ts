import { useState, useCallback } from 'react'

interface UseAsyncOperationOptions<T> {
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

interface UseAsyncOperationReturn<T, Args extends unknown[]> {
  execute: (...args: Args) => Promise<T | undefined>
  isLoading: boolean
  error: string | null
  reset: () => void
}

export function useAsyncOperation<T, Args extends unknown[] = unknown[]>(
  asyncFn: (...args: Args) => Promise<T>,
  options: UseAsyncOperationOptions<T> = {}
): UseAsyncOperationReturn<T, Args> {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const execute = useCallback(
    async (...args: Args): Promise<T | undefined> => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await asyncFn(...args)
        options.onSuccess?.(result)
        return result
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred'
        setError(errorMessage)
        options.onError?.(err instanceof Error ? err : new Error(errorMessage))
        return undefined
      } finally {
        setIsLoading(false)
      }
    },
    [asyncFn, options]
  )

  const reset = useCallback(() => {
    setIsLoading(false)
    setError(null)
  }, [])

  return {
    execute,
    isLoading,
    error,
    reset,
  }
}
