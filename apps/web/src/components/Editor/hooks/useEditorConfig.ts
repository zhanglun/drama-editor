import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import CodeBlock from '@tiptap/extension-code-block'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import ListItem from '@tiptap/extension-list-item'
import { Scene, Dialogue, Action, Transition, SlashCommand, CharacterMention, CharacterMentionNode } from '../../../extensions'
import { extractCharacters } from '../../../utils/characterExtractor'
import { useScriptStore } from '../../../stores/scriptStore'
import { ScriptContent } from '../../../types'

interface UseEditorConfigProps {
  content?: ScriptContent
  onChange?: (content: ScriptContent) => void
  placeholder: string
  onUpdate?: () => void
}

export function useEditorConfig({ content, onChange, placeholder, onUpdate }: UseEditorConfigProps) {
  const { currentScript } = useScriptStore()
  const characters = currentScript?.content?.characters || []

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        codeBlock: false,
        horizontalRule: false,
      }),
      CharacterCount.configure(),
      Placeholder.configure({
        placeholder,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Blockquote,
      BulletList,
      OrderedList,
      CodeBlock,
      HorizontalRule,
      ListItem,
      Scene,
      Dialogue,
      Action,
      Transition,
      SlashCommand,
      CharacterMention.configure({ characters }),
      CharacterMentionNode,
    ],
    content: content || { type: 'doc', content: [] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const characters = extractCharacters(json)
      
      if (process.env.NODE_ENV === 'development') {
        const mentionNodes: any[] = []
        json.content?.forEach((node: any) => {
          if (node.content) {
            node.content.forEach((child: any) => {
              if (child.type === 'characterMention' || child.marks?.some((m: any) => m.type === 'characterMention')) {
                mentionNodes.push(child)
              }
            })
          }
        })
        if (mentionNodes.length > 0) {
          if (import.meta.env.DEV) {
            console.log('CharacterMention nodes in JSON:', mentionNodes)
          }
        }
      }
      
      if (onChange) {
        onChange({
          type: 'doc',
          content: json.content as any,
          characters,
          metadata: content?.metadata
        })
      }
      
      onUpdate?.()
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px] p-8',
      },
    },
  })

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

  return { editor, insertWithFlash }
}
