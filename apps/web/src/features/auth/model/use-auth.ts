import { useState } from 'react'

export interface User {
  id: string
  email: string
  name?: string
}

export interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  error: Error | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, name?: string) => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const login = async (_email: string, _password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      throw new Error('Auth not implemented')
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    setError(null)
    try {
      setUser(null)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (_email: string, _password: string, _name?: string) => {
    setIsLoading(true)
    setError(null)
    try {
      throw new Error('Auth not implemented')
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    register,
  }
}
