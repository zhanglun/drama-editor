import { create } from 'zustand'

interface AuthState {
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name?: string) => Promise<void>
  logout: () => void
}

export const useAuth = create<AuthState & AuthActions>()((set) => ({
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null })
    try {
      // TODO: 实现登录逻辑
      console.log('Login:', email, password)
      set({ isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  register: async (email: string, password: string, name?: string) => {
    set({ isLoading: true, error: null })
    try {
      // TODO: 实现注册逻辑
      console.log('Register:', email, password, name)
      set({ isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  logout: () => {
    set({ isLoading: false, error: null })
  },
}))
