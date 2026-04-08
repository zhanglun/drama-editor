import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion, { type SuggestionProps } from '@tiptap/suggestion'
import tippy, { Instance } from 'tippy.js'
import { SlashMenu } from './SlashMenu'
import { PluginKey } from '@tiptap/pm/state'
import 'tippy.js/dist/tippy.css'

export interface SlashMenuItem {
  title: string
  description: string
  command: string
  icon: string
  group?: 'script' | 'formatting'
}

const defaultItems: SlashMenuItem[] = [
  { title: '场景', description: '插入场景标题', command: 'insertScene', icon: '🎬', group: 'script' },
  { title: '对白', description: '插入角色对白', command: 'insertDialogue', icon: '💬', group: 'script' },
  { title: '动作', description: '插入动作描述', command: 'insertAction', icon: '🎭', group: 'script' },
  { title: '转场', description: '插入转场效果', command: 'insertTransition', icon: '🔄', group: 'script' },
  { title: '注释', description: '插入备注注释', command: 'insertNote', icon: '📝', group: 'script' },
  { title: '标题 1', description: '大标题', command: 'heading1', icon: 'H1', group: 'formatting' },
  { title: '标题 2', description: '中标题', command: 'heading2', icon: 'H2', group: 'formatting' },
  { title: '标题 3', description: '小标题', command: 'heading3', icon: 'H3', group: 'formatting' },
  { title: '标题 4', description: '四级标题', command: 'heading4', icon: 'H4', group: 'formatting' },
  { title: '标题 5', description: '五级标题', command: 'heading5', icon: 'H5', group: 'formatting' },
  { title: '标题 6', description: '六级标题', command: 'heading6', icon: 'H6', group: 'formatting' },
  { title: '引用', description: '插入引用块', command: 'blockquote', icon: '❝', group: 'formatting' },
  { title: '无序列表', description: '插入无序列表', command: 'bulletList', icon: '•', group: 'formatting' },
  { title: '有序列表', description: '插入有序列表', command: 'orderedList', icon: '1.', group: 'formatting' },
  { title: '代码块', description: '插入代码块', command: 'codeBlock', icon: '⌨', group: 'formatting' },
  { title: '分割线', description: '插入水平分割线', command: 'horizontalRule', icon: '—', group: 'formatting' },
]

export const SlashCommand = Extension.create({
  name: 'slashCommand',

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        pluginKey: new PluginKey('slashCommand'),
        char: '/',
        command: ({ editor, range, props }) => {
          props.command({ editor, range })
        },
        items: ({ query }: { query: string }) => {
          return defaultItems.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
          )
        },
        render: () => {
          let component: ReactRenderer | null = null
          let popup: Instance | null = null

          return {
            onStart: (props: SuggestionProps<SlashMenuItem>) => {
              component = new ReactRenderer(SlashMenu, {
                props: {
                  items: defaultItems,
                  command: (item: SlashMenuItem) => {
                    const editor = props.editor
                    const range = props.range
                    
                    editor.chain().focus().deleteRange(range).run()
                    
                    switch (item.command) {
                      case 'insertScene':
                        editor.chain().insertScene().run()
                        break
                      case 'insertDialogue':
                        editor.chain().insertDialogue().run()
                        break
                      case 'insertAction':
                        editor.chain().insertAction().run()
                        break
                      case 'insertTransition':
                        editor.chain().insertTransition().run()
                        break
                      case 'insertNote':
                        editor.chain().setParagraph().run()
                        break
                      case 'heading1':
                        editor.chain().toggleHeading({ level: 1 }).run()
                        break
                      case 'heading2':
                        editor.chain().toggleHeading({ level: 2 }).run()
                        break
                      case 'heading3':
                        editor.chain().toggleHeading({ level: 3 }).run()
                        break
                      case 'heading4':
                        editor.chain().toggleHeading({ level: 4 }).run()
                        break
                      case 'heading5':
                        editor.chain().toggleHeading({ level: 5 }).run()
                        break
                      case 'heading6':
                        editor.chain().toggleHeading({ level: 6 }).run()
                        break
                      case 'blockquote':
                        editor.chain().toggleBlockquote().run()
                        break
                      case 'bulletList':
                        editor.chain().toggleBulletList().run()
                        break
                      case 'orderedList':
                        editor.chain().toggleOrderedList().run()
                        break
                      case 'codeBlock':
                        editor.chain().toggleCodeBlock().run()
                        break
                      case 'horizontalRule':
                        editor.chain().setHorizontalRule().run()
                        break
                    }
                    
                    popup?.hide()
                  },
                },
                editor: props.editor,
              })

              popup = tippy(document.body, {
                getReferenceClientRect: props.clientRect as () => DOMRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
              })
            },

            onUpdate: (props: SuggestionProps<SlashMenuItem>) => {
              component?.updateProps({
                items: props.items,
              })

              if (!popup) return

              popup.setProps({
                getReferenceClientRect: props.clientRect as () => DOMRect,
              })
            },

            onKeyDown: (props: { event: KeyboardEvent }) => {
              if (props.event.key === 'Escape') {
                popup?.hide()
                return true
              }
              return false
            },

            onExit: () => {
              popup?.destroy()
              component?.destroy()
            },
          }
        },
      }),
    ]
  },
})
