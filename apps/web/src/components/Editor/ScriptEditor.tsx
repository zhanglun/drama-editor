import { EditorContent, useEditorState } from '@tiptap/react'
import { useState, useRef, useEffect, RefObject } from 'react'
import type { ScriptContent } from '../../shared/types'
import { useLineNumbers, useEditorConfig, LineNumbersMode } from './hooks'
import { EditorToolbar } from './EditorToolbar'

interface ScriptEditorProps {
  content?: ScriptContent
  onChange?: (content: ScriptContent) => void
  placeholder?: string
  onSaveVersion?: () => void
}

export function ScriptEditor({ 
  content, 
  onChange,
  placeholder = '开始编写你的剧本...',
  onSaveVersion,
}: ScriptEditorProps) {
  const [lineNumbersMode, setLineNumbersMode] = useState<LineNumbersMode>('line')
  const lineNumbersRef = useRef<HTMLDivElement>(null)
  const editorContainerRef = useRef<HTMLDivElement>(null)
  const isInitialized = useRef(false)

  const { editor, insertWithFlash } = useEditorConfig({
    content,
    onChange,
    placeholder,
  })

  const { lineHeights, handleLineNumberClick } = useLineNumbers({
    editor,
    editorContainerRef: editorContainerRef as RefObject<HTMLDivElement>,
    lineNumbersRef: lineNumbersRef as RefObject<HTMLDivElement>,
    lineNumbersMode,
  })

  useEffect(() => {
    if (editor && !isInitialized.current) {
      isInitialized.current = true
    }
  }, [editor])

  const toggleLineNumbersMode = () => {
    setLineNumbersMode(prev => prev === 'line' ? 'scene' : 'line')
  }

  const { characterCount, wordCount } = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      characterCount: e.storage.characterCount.characters(),
      wordCount: e.storage.characterCount.words(),
    }),
  })

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <EditorToolbar
        editor={editor}
        lineNumbersMode={lineNumbersMode}
        onToggleLineNumbers={toggleLineNumbersMode}
        onSaveVersion={onSaveVersion}
        insertWithFlash={insertWithFlash}
      />

      <div className="flex flex-1">
        <div 
          ref={lineNumbersRef}
          className="line-numbers-container border-r border-gray-200 bg-gray-50 overflow-y-hidden"
          style={{ width: '48px', minWidth: '48px', paddingTop: '32px', paddingBottom: '32px' }}
        >
          {lineHeights.map((line) => (
            <div
              key={line.number}
              className={`line-number-item px-2 text-right text-sm cursor-pointer hover:bg-gray-200 flex items-start ${
                line.type === 'scene' ? 'font-bold text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => handleLineNumberClick(line.pos)}
              style={{ height: `${line.height}px` }}
            >
              {line.number}
            </div>
          ))}
        </div>

        <div ref={editorContainerRef} className="flex-1 overflow-hidden">
          <EditorContent editor={editor} />
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-2 text-sm text-gray-600 flex justify-between">
        <span>字符数: {characterCount}</span>
        <span>词数: {wordCount}</span>
      </div>
    </div>
  )
}
