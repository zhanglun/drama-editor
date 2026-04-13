import { useEffect, useState, type ReactNode } from 'react'
import { MonacoScriptEditor } from '../primitives'
import { ScriptImportEmptyState } from './ScriptImportEmptyState'

export type ScriptEditPanelEmptyStateStrategy = 'import' | 'editable' | 'custom'

interface ScriptEditPanelProps {
  content: string
  onChange: (value: string) => void
  revealLine?: number
  emptyStateStrategy?: ScriptEditPanelEmptyStateStrategy
  onImport?: (file: File) => Promise<void>
  renderEmptyState?: (api: { enterEditing: () => void; onImport?: (file: File) => Promise<void> }) => ReactNode
}

export function ScriptEditPanel({
  content,
  onChange,
  revealLine,
  emptyStateStrategy = 'editable',
  onImport,
  renderEmptyState,
}: ScriptEditPanelProps) {
  const [isBypassingEmptyState, setIsBypassingEmptyState] = useState(false)
  const isEmpty = content.trim().length === 0

  useEffect(() => {
    if (!isEmpty) {
      setIsBypassingEmptyState(false)
    }
  }, [isEmpty])

  const enterEditing = () => {
    setIsBypassingEmptyState(true)
  }

  if (!isEmpty || isBypassingEmptyState || emptyStateStrategy === 'editable') {
    return (
      <MonacoScriptEditor
        value={content}
        onChange={onChange}
        revealLine={revealLine}
      />
    )
  }

  if (emptyStateStrategy === 'custom' && renderEmptyState) {
    return (
      <>{renderEmptyState({ enterEditing, onImport })}</>
    )
  }

  return (
    <ScriptImportEmptyState
      onImport={onImport}
      onStartWriting={enterEditing}
      allowDirectEditing
    />
  )
}
