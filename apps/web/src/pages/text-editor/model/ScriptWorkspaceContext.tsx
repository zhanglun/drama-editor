import { createContext, useContext, type ReactNode } from 'react'
import type { useScriptWorkspaceController } from './useScriptWorkspaceController'

type ScriptWorkspaceController = ReturnType<typeof useScriptWorkspaceController>

const ScriptWorkspaceContext = createContext<ScriptWorkspaceController | null>(null)

interface ScriptWorkspaceProviderProps {
  value: ScriptWorkspaceController
  children: ReactNode
}

export function ScriptWorkspaceProvider({ value, children }: ScriptWorkspaceProviderProps) {
  return (
    <ScriptWorkspaceContext.Provider value={value}>
      {children}
    </ScriptWorkspaceContext.Provider>
  )
}

export function useScriptWorkspaceContext() {
  const context = useContext(ScriptWorkspaceContext)

  if (!context) {
    throw new Error('useScriptWorkspaceContext must be used within a ScriptWorkspaceProvider')
  }

  return context
}
