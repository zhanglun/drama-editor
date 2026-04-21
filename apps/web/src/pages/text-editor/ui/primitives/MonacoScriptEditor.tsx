import Editor, { loader, type BeforeMount, type OnMount } from '@monaco-editor/react'
import { useCallback, useEffect, useRef } from 'react'
import { registerScriptMonaco } from './monaco-theme'

import * as monaco from 'monaco-editor'

loader.config({ monaco })

interface MonacoScriptEditorProps {
  value: string
  onChange: (value: string) => void
  revealLine?: number
}

const EDITOR_VERTICAL_PADDING = 20

export function MonacoScriptEditor({ value, onChange, revealLine }: MonacoScriptEditorProps) {
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null)

  const handleBeforeMount: BeforeMount = useCallback((monaco) => {
    registerScriptMonaco(monaco)
  }, [])

  const handleMount: OnMount = useCallback((editor) => {
    editorRef.current = editor
  }, [])

  useEffect(() => {
    if (!editorRef.current || !revealLine) return

    const targetTop = Math.max(editorRef.current.getTopForLineNumber(revealLine) - EDITOR_VERTICAL_PADDING, 0)

    editorRef.current.setScrollTop(targetTop)
    editorRef.current.setPosition({ lineNumber: revealLine, column: 1 })
    editorRef.current.focus()
  }, [revealLine])

  return (
    <div className="h-full overflow-hidden rounded-xl border border-[#33282e] bg-[#151312]">
      <Editor
        height="100%"
        language="chinese-plaintext"
        theme="script-dark"
        value={value}
        onChange={(nextValue) => onChange(nextValue ?? '')}
        beforeMount={handleBeforeMount}
        onMount={handleMount}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          automaticLayout: true,
          scrollBeyondLastLine: false,
          padding: { top: EDITOR_VERTICAL_PADDING, bottom: EDITOR_VERTICAL_PADDING },
          unicodeHighlight: { ambiguousCharacters: false, invisibleCharacters: false },
          overviewRulerBorder: false,
          lineDecorationsWidth: 12,
          glyphMargin: false,
        }}
      />
    </div>
  )
}
