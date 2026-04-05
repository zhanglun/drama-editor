import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState, useRef } from 'react'
import { Save } from 'lucide-react'
import { Scene, Dialogue, Action, Transition, SlashCommand } from '../../extensions'
import { CharacterMention } from '../../extensions/CharacterMention'
import { extractCharacters } from '../../utils/characterExtractor'
import type { ScriptContent } from '../../types'

type LineNumbersMode = 'line' | 'scene'

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
  const [lineHeights, setLineHeights] = useState<{ number: number; type: 'line' | 'scene'; pos: number; height: number }[]>([])
  const lineNumbersRef = useRef<HTMLDivElement>(null)
  const editorContainerRef = useRef<HTMLDivElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure(),
      Placeholder.configure({
        placeholder,
      }),
      Scene,
      Dialogue,
      Action,
      Transition,
      SlashCommand,
    ],
    content: content || { type: 'doc', content: [] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const characters = extractCharacters(json)
      
      if (onChange) {
        onChange({
          type: 'doc',
          content: json.content as any,
          characters,
          metadata: content?.metadata
        })
      }
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] p-8',
      },
    },
  })

  useEffect(() => {
    if (editor && content && content.content) {
      const currentContent = editor.getJSON()
      if (JSON.stringify(currentContent) !== JSON.stringify(content.content)) {
        editor.commands.setContent(content.content)
      }
      calculateLineHeights()
    }
  }, [content, editor])

  const calculateLineHeights = () => {
    if (!editor || !editorContainerRef.current) return

    const editorEl = editorContainerRef.current.querySelector('.ProseMirror') as HTMLElement
    if (!editorEl) return

    const nodes = editorEl.querySelectorAll('p, div[data-type="scene"], div[data-type="dialogue"], div[data-type="action"], div[data-type="transition"]')
    
    const newLineHeights: { number: number; type: 'line' | 'scene'; pos: number; height: number }[] = []
    const doc = editor.state.doc
    let lineNumber = 1
    let sceneNumber = 0
    let nodeIndex = 0
    
    doc.descendants((node, pos) => {
      if (node.type.name === 'scene') {
        sceneNumber++
        const domNode = nodes[nodeIndex] as HTMLElement
        const height = domNode ? domNode.getBoundingClientRect().height : 28
        newLineHeights.push({ number: sceneNumber, type: 'scene', pos, height })
        nodeIndex++
      } else if (node.type.name === 'paragraph' || 
                 node.type.name === 'dialogue' || 
                 node.type.name === 'action' || 
                 node.type.name === 'transition') {
        if (lineNumbersMode === 'line') {
          const domNode = nodes[nodeIndex] as HTMLElement
          const height = domNode ? domNode.getBoundingClientRect().height : 28
          newLineHeights.push({ number: lineNumber, type: 'line', pos, height })
          lineNumber++
          nodeIndex++
        }
      }
    })
    
    setLineHeights(newLineHeights)
  }

  useEffect(() => {
    if (!editor) return
    calculateLineHeights()
  }, [editor])

  // 同步行号滚动
  useEffect(() => {
    if (!editor || !lineNumbersRef.current || !editorContainerRef.current) return

    const editorEl = editorContainerRef.current.querySelector('.ProseMirror') as HTMLElement
    if (!editorEl) return

    const handleScroll = () => {
      if (lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = editorEl.scrollTop
      }
    }

    editorEl.addEventListener('scroll', handleScroll)
    return () => editorEl.removeEventListener('scroll', handleScroll)
  }, [editor])

  // 生成行号
  const getLineNumbers = () => {
    if (!editor) return []

    const doc = editor.state.doc
    const lines: { number: number; type: 'line' | 'scene'; pos: number }[] = []
    let lineNumber = 1
    let sceneNumber = 0

    doc.descendants((node, pos) => {
      if (node.type.name === 'scene') {
        sceneNumber++
        lines.push({ number: sceneNumber, type: 'scene', pos })
      } else if (node.type.name === 'paragraph' || 
                 node.type.name === 'dialogue' || 
                 node.type.name === 'action' || 
                 node.type.name === 'transition') {
        if (lineNumbersMode === 'line') {
          lines.push({ number: lineNumber, type: 'line', pos })
          lineNumber++
        }
      }
    })

    return lines
  }

  // 点击行号导航
  const handleLineNumberClick = (pos: number) => {
    if (!editor) return
    editor.commands.setTextSelection(pos)
    editor.commands.focus()
  }

  const characterCount = editor?.storage.characterCount.characters() ?? 0
  const wordCount = editor?.storage.characterCount.words() ?? 0

  const insertWithFlash = (insertFn: () => boolean) => {
    if (!editor) return
    
    insertFn()
    
    setTimeout(() => {
      const { from } = editor.state.selection
      const domAtPos = editor.view.domAtPos(from)
      const node = domAtPos.node.nodeType === 1 
        ? domAtPos.node as Element
        : domAtPos.node.parentElement
      
      if (node && node !== editor.view.dom) {
        node.classList.add('flash-highlight')
        setTimeout(() => {
          node.classList.remove('flash-highlight')
        }, 800)
      }
    }, 0)
  }

  const toggleLineNumbersMode = () => {
    setLineNumbersMode(prev => prev === 'line' ? 'scene' : 'line')
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="border-b border-gray-200 px-4 py-2 flex items-center gap-2 bg-gray-50">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor?.isActive('bold') 
              ? 'bg-gray-200 font-bold' 
              : 'hover:bg-gray-100'
          }`}
          title="粗体 (Ctrl+B)"
        >
          B
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded italic ${
            editor?.isActive('italic') 
              ? 'bg-gray-200' 
              : 'hover:bg-gray-100'
          }`}
          title="斜体 (Ctrl+I)"
        >
          I
        </button>
        <div className="border-l border-gray-300 h-6 mx-2" />
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertScene().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('scene') ? 'bg-blue-100' : ''
          }`}
          title="插入场景 (Ctrl+1)"
        >
          场景
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertDialogue().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('dialogue') ? 'bg-purple-100' : ''
          }`}
          title="插入对白 (Ctrl+2)"
        >
          对白
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertAction().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('action') ? 'bg-green-100' : ''
          }`}
          title="插入动作 (Ctrl+3)"
        >
          动作
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertTransition().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('transition') ? 'bg-orange-100' : ''
          }`}
          title="插入转场 (Ctrl+4)"
        >
          转场
        </button>
        <div className="border-l border-gray-300 h-6 mx-2" />
        <button
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().undo()}
          className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="撤销 (Ctrl+Z)"
        >
          ↩
        </button>
        <button
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().redo()}
          className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="重做 (Ctrl+Shift+Z)"
        >
          ↶
        </button>
        <div className="border-l border-gray-300 h-6 mx-2" />
        <button
          onClick={() => onSaveVersion?.()}
          className="px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
          title="保存版本"
        >
          <Save className="h-4 w-4" />
        </button>
        <div className="border-l border-gray-300 h-6 mx-2" />
        <button
          onClick={toggleLineNumbersMode}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            lineNumbersMode === 'scene' ? 'bg-blue-100' : ''
          }`}
          title={lineNumbersMode === 'line' ? '切换到场景号' : '切换到行号'}
        >
          {lineNumbersMode === 'line' ? '行号' : '场景号'}
        </button>
      </div>

      <div className="flex flex-1">
        {/* 行号区域 */}
        <div 
          ref={lineNumbersRef}
          className="line-numbers-container border-r border-gray-200 bg-gray-50 overflow-y-hidden"
          style={{ width: '48px', minWidth: '48px', paddingTop: '32px', paddingBottom: '32px' }}
        >
          {lineHeights.map((line, index) => (
            <div
              key={index}
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

        {/* 编辑器区域 */}
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
