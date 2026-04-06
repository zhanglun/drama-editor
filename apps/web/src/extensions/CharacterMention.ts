import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'
import tippy, { Instance } from 'tippy.js'
import { MentionList } from './MentionList'
import { CharacterMentionNode } from './CharacterMentionNode'
import 'tippy.js/dist/tippy.css'

interface MentionItem {
  id: string
  label: string
}

export interface CharacterMentionOptions {
  characters: string[]
}

export const CharacterMention = Extension.create<CharacterMentionOptions>({
  name: 'characterMention',

  addOptions() {
    return {
      characters: [],
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        char: '@',
        command: ({ editor, range, props }) => {
          editor.chain().focus().deleteRange(range).run()
          
          editor.chain()
            .focus()
            .insertContent({
              type: 'characterMention',
              attrs: {
                id: props.id,
                label: props.label,
              },
            })
            .run()
          
          popup?.hide()
        },
        items: ({ query }: { query: string }) => {
          const characters = this.options.characters || []
          return characters
            .filter((name: string) => name.toLowerCase().includes(query.toLowerCase()))
            .map((name: string) => ({
              id: name,
              label: name,
            }))
        },
        render: () => {
          let component: any = null
          let popup: Instance | null = null

          return {
            onStart: (props: any) => {
              component = new ReactRenderer(MentionList, {
                props: {
                  items: props.items,
                  command: (item: MentionItem) => {
                    props.editor.chain().focus().deleteRange(props.range).run()
                    
                    props.editor.chain()
                      .focus()
                      .insertContent({
                        type: 'characterMention',
                        attrs: {
                          id: item.id,
                          label: item.label,
                        },
                      })
                      .run()
                    
                    popup?.hide()
                  },
                },
                editor: props.editor,
              })
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
        },
      }),
    ]
  },
})
