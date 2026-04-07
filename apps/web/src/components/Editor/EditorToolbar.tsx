import { Editor } from '@tiptap/core'
import { Save } from 'lucide-react'
import { LineNumbersMode } from './hooks/useLineNumbers'

interface EditorToolbarProps {
  editor: Editor | null
  lineNumbersMode: LineNumbersMode
  onToggleLineNumbers: () => void
  onSaveVersion?: () => void
  insertWithFlash: (fn: () => boolean) => void
}

export function EditorToolbar({
  editor,
  lineNumbersMode,
  onToggleLineNumbers,
  onSaveVersion,
  insertWithFlash,
}: EditorToolbarProps) {
  return (
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
      <select
        onChange={(e) => {
          const level = parseInt(e.target.value)
          if (level) {
            editor?.chain().focus().toggleHeading({ level: level as 1|2|3|4|5|6 }).run()
          } else {
            editor?.chain().focus().setParagraph().run()
          }
        }}
        className="px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 text-sm"
        title="标题级别"
      >
        <option value="">正文</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
        <option value="5">H5</option>
        <option value="6">H6</option>
      </select>
      <button
        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        className={`px-3 py-1 rounded ${
          editor?.isActive('blockquote') 
            ? 'bg-gray-200' 
            : 'hover:bg-gray-100'
        }`}
        title="引用 (Ctrl+Shift+B)"
      >
        ❝
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 rounded ${
          editor?.isActive('bulletList') 
            ? 'bg-gray-200' 
            : 'hover:bg-gray-100'
        }`}
        title="无序列表"
      >
        •
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 rounded ${
          editor?.isActive('orderedList') 
            ? 'bg-gray-200' 
            : 'hover:bg-gray-100'
        }`}
        title="有序列表"
      >
        1.
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={`px-3 py-1 rounded ${
          editor?.isActive('codeBlock') 
            ? 'bg-gray-200' 
            : 'hover:bg-gray-100'
        }`}
        title="代码块"
      >
        ⌨
      </button>
      <button
        onClick={() => editor?.chain().focus().setHorizontalRule().run()}
        className="px-3 py-1 rounded hover:bg-gray-100"
        title="分割线"
      >
        —
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
        onClick={onToggleLineNumbers}
        className={`px-3 py-1 rounded hover:bg-gray-100 ${
          lineNumbersMode === 'scene' ? 'bg-blue-100' : ''
        }`}
        title={lineNumbersMode === 'line' ? '切换到场景号' : '切换到行号'}
      >
        {lineNumbersMode === 'line' ? '行号' : '场景号'}
      </button>
    </div>
  )
}
