/**
 * Zustand async action factory with automatic loading/error handling.
 * Eliminates the repeated set({ isLoading: true, error: null }) → try → catch pattern.
 *
 * @example
 * // For stores using isLoading:
 * loadScripts: async () => asyncAction(
 *   set,
 *   async () => {
 *     const response = await api.getScripts()
 *     if (response.error) throw new Error(response.error)
 *     return response.data
 *   },
 *   (data) => ({ scripts: data, isLoading: false }),
 * ),
 *
 * @example
 * // For stores using loading (canvas store):
 * loadFromServer: async (id) => asyncAction(
 *   set,
 *   async () => {
 *     const response = await api.getData(id)
 *     if (response.error) throw new Error(response.error)
 *     return response.data
 *   },
 *   (data) => ({ data, loading: false }),
 *   { loadingKey: 'loading' },
 * ),
 */

type SetState<T> = (partial: Partial<T> | ((state: T) => Partial<T>)) => void

interface AsyncActionOptions<TState> {
  /** The key for loading state, defaults to 'isLoading'. Use 'loading' for canvas store. */
  loadingKey?: keyof TState & string
  /** Whether to rethrow errors. Default: true. Set false for fire-and-forget actions. */
  rethrow?: boolean
}

/**
 * Wraps an async operation with automatic loading/error state management.
 *
 * @param set - Zustand's set function
 * @param action - The async operation to execute
 * @param onSuccess - Callback that receives the result and returns state updates (must include loading: false)
 * @param options - Optional configuration
 * @returns The result of the action, or undefined if error occurred and rethrow is false
 */
export async function asyncAction<TState, TResult>(
  set: SetState<TState>,
  action: () => Promise<TResult>,
  onSuccess: (result: TResult) => Partial<TState>,
  options?: AsyncActionOptions<TState>,
): Promise<TResult | undefined> {
  const loadingKey = (options?.loadingKey ?? 'isLoading') as keyof TState
  const rethrow = options?.rethrow ?? true

  set({ [loadingKey]: true, error: null } as unknown as Partial<TState>)

  try {
    const result = await action()
    set(onSuccess(result))
    return result
  } catch (error) {
    set({
      [loadingKey]: false,
      error: (error as Error).message,
    } as unknown as Partial<TState>)
    if (rethrow) throw error
    return undefined
  }
}

/**
 * Creates a bound async action factory for a specific store.
 * Useful when you have multiple actions in the same store.
 *
 * @example
 * const action = createAsyncActionFactory<ScriptStore>(set, 'isLoading')
 *
 * loadScripts: () => action(
 *   async () => api.getScripts(),
 *   (data) => ({ scripts: data, isLoading: false }),
 * ),
 */
export function createAsyncActionFactory<TState>(
  set: SetState<TState>,
  loadingKey: keyof TState & string = 'isLoading' as keyof TState & string,
) {
  return <TResult>(
    action: () => Promise<TResult>,
    onSuccess: (result: TResult) => Partial<TState>,
    rethrow: boolean = true,
  ): Promise<TResult | undefined> => {
    return asyncAction(set, action, onSuccess, { loadingKey, rethrow })
  }
}
