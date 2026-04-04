import { useEditor, EditorContent } from '@tiptap/react'
import { useEffect } from 'react'
import { getEditorExtensions } from './extensions'
import { extractCharacters } from '../../lib/character-extractor'
import type { ScriptContent } from '../../types'

interface TipTapEditorProps {
  content?: ScriptContent
  onChange?: (content: ScriptContent) => void
  placeholder?: string
  className?: string
  editorClassName?: string
}

export function TipTapEditor({
  content,
  onChange,
  placeholder = '开始编写你的剧本...',
  className,
  editorClassName,
}: TipTapEditorProps) {
  const editor = useEditor({
    extensions: getEditorExtensions(placeholder),
    content: content?.content as any,
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const characters = extractCharacters(json)

      if (onChange) {
        onChange({
          type: 'doc',
          content: json.content as any,
          characters,
          metadata: content?.metadata,
        })
      }
    },
    editorProps: {
      attributes: {
        class: editorClassName || 'prose prose-lg max-w-none focus:outline-none min-h-[500px] p-8',
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

  return (
    <div className={className || 'border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm'}>
      <EditorContent editor={editor} />
      <div className="border-t border-gray-200 px-4 py-2 text-sm text-gray-600 flex justify-between">
        <span>字符数: {characterCount}</span>
        <span>词数: {wordCount}</span>
      </div>
    </div>
  )
}
