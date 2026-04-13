import Editor, { type BeforeMount, type OnMount } from '@monaco-editor/react'
import { useCallback, useEffect, useRef } from 'react'
import { registerScriptMonaco } from './monaco-theme'

interface MonacoScriptEditorProps {
  value: string
  onChange: (value: string) => void
  revealLine?: number
}

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

    editorRef.current.revealLineInCenter(revealLine)
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
          padding: { top: 20, bottom: 20 },
          unicodeHighlight: { ambiguousCharacters: false, invisibleCharacters: false },
          overviewRulerBorder: false,
          lineDecorationsWidth: 12,
          glyphMargin: false,
        }}
      />
    </div>
  )
}
