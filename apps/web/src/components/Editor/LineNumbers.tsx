import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState } from 'react'
import { Save } from 'lucide-react'
import { Scene, Dialogue, Action, Transition, SlashCommand } from '../../extensions'
import { CharacterMention } from '../../extensions/CharacterMention'
import { extractCharacters } from '../../utils/characterExtractor'
import type { ScriptContent } from '../../types'

interface ScriptEditorProps {
  content?: ScriptContent
  onChange?: (content: ScriptContent) => void
  placeholder?: string
  onSaveVersion?: () => void
}
type LineNumbersMode = 'line' | 'scene'

export function ScriptEditor({ 
  content, 
  onChange,
  placeholder = '开始编写你的剧本...',
  onSaveVersion,
}: ScriptEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount
      Placeholder.configure({
        placeholder,
      }),
      Scene
      Dialogue
      Action
      Transition
      SlashCommand
      CharacterMention.configure({
        suggestion: {
          items: ({ query }: { query: string }) => {
            const characters = content?.characters || []
            return characters
              .filter(name => name.toLowerCase().includes(query.toLowerCase()))
              .map(name => ({
                id: name,
                label: name,
              }))
          },
        },
      }),
    },
  })

  const content = content?.content as any,
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
    }
  }, [content, editor])

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
        : : domAtPos.node.parentElement
      
      if (node && node !== editor.view.dom) {
        node.classList.add('flash-highlight')
        setTimeout(() => {
          node.classList.remove('flash-highlight')
        }, 800)
      }
    }, 0)
  }

  const toggleLineNumbersMode = () => {
    setLineNumbersMode(mode === 'line' ? 'scene' : 'line')
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
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertScene().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('scene') ? 'bg-blue-100' : ''
          }`}
          title="插入场景"
        >
          场景
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertDialogue().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('dialogue') ? 'bg-purple-100' : ''
          }`}
          title="插入对白"
        >
          对白
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertAction().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('action') ? 'bg-green-100' : ''
          }`}
          title="插入动作"
        >
          动作
        </button>
        <button
          onClick={() => insertWithFlash(() => editor?.chain().focus().insertTransition().run() ?? false)}
          className={`px-3 py-1 rounded hover:bg-gray-100 ${
            editor?.isActive('transition') ? 'bg-orange-100' : ''
          }`}
          title="插入转场"
        >
          轉场
        </button>
        <div className="border-l border-gray-300 h-6 mx-2" />
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
          title={lineNumbersMode === 'line' ? '行号' : '场景号'}
        >
          {lineNumbersMode === 'scene' ? '场景号' : '行号'}
        </button>
      </div>

      <div className="flex-1">
        <EditorContent editor={editor} />
      </div>

      <div className="border-t border-gray-200 px-4 py-2 text-sm text-gray-600 flex justify-between">
        <span>字符数: {characterCount}</span>
        <span>词数: {wordCount}</span>
      </div>
    </div>
  )
}