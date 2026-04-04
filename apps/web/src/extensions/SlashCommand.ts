import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'
import tippy, { Instance } from 'tippy.js'
import { SlashMenu, SlashMenuItem } from './SlashMenu'
import 'tippy.js/dist/tippy.css'

const defaultItems: SlashMenuItem[] = [
  { title: '场景', description: '插入场景标题', command: 'insertScene', icon: '🎬' },
  { title: '对白', description: '插入角色对白', command: 'insertDialogue', icon: '💬' },
  { title: '动作', description: '插入动作描述', command: 'insertAction', icon: '🎭' },
  { title: '转场', description: '插入转场效果', command: 'insertTransition', icon: '🔄' },
  { title: '注释', description: '插入备注注释', command: 'insertNote', icon: '📝' },
]

export const SlashCommand = Extension.create({
  name: 'slashCommand',

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
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
          let component: any = null
          let popup: Instance | null = null

          return {
            onStart: (props: any) => {
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
                    }
                    
                    popup?.hide()
                  },
                },
                editor: props.editor,
              })

              popup = tippy(document.body, {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
              })
            },

            onUpdate: (props: any) => {
              component?.updateProps({
                items: props.items,
              })

              if (!popup) return

              popup.setProps({
                getReferenceClientRect: props.clientRect,
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
