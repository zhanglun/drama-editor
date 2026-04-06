import { Extension } from '@tiptap/core'
import { ReactRenderer } from '@tiptap/react'
import Suggestion from '@tiptap/suggestion'
import tippy, { Instance } from 'tippy.js'
import { MentionList } from './MentionList'
import { PluginKey } from '@tiptap/pm/state'
import 'tippy.js/dist/tippy.css'

interface MentionItem {
  id: string
  label: string
}

export interface CharacterMentionOptions {
  characters: string[] | (() => string[])
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
        pluginKey: new PluginKey('characterMention'),
        char: '@',
        allow: ({ state, range }) => {
          // 允许在任何位置触发 @
          const $from = state.doc.resolve(range.from)
          const textBefore = $from.parent.textBetween(
            Math.max(0, $from.parentOffset - 1),
            $from.parentOffset,
            undefined,
            '\ufffc'
          )
          // 如果前面是字母或数字，不允许触发（避免在单词中间触发）
          return !/[a-zA-Z0-9]/.test(textBefore)
        },
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
        },
        items: ({ query }: { query: string }) => {
          const charactersValue = typeof this.options.characters === 'function'
            ? this.options.characters()
            : this.options.characters || []
          return charactersValue
            .filter((name: string) => name.toLowerCase().includes(query.toLowerCase()))
            .map((name: string) => ({
              id: name,
              label: name,
            }))
        },
        render: () => {
          let component: any = null
          let popup: Instance | null = null
          let editorRef: any = null

          return {
            onStart: (props: any) => {
              editorRef = props.editor
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

            onKeyDown: (props: { event: KeyboardEvent; view: any; range: any }) => {
              if (props.event.key === 'Escape') {
                popup?.hide()
                return true
              }
              
              if (props.event.key === 'ArrowUp' || props.event.key === 'ArrowDown') {
                props.event.preventDefault()
                props.event.stopPropagation()
                
                const items = component?.component?.props?.items || []
                if (items.length === 0) return true
                
                const currentIndex = component?.component?.state?.selectedIndex || 0
                let newIndex = currentIndex
                
                if (props.event.key === 'ArrowUp') {
                  newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
                } else {
                  newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
                }
                
                component?.component?.setState?.({ selectedIndex: newIndex })
                return true
              }
              
              if (props.event.key === 'Enter') {
                props.event.preventDefault()
                const items = component?.component?.props?.items || []
                if (items.length > 0) {
                  const selectedIndex = component?.component?.state?.selectedIndex || 0
                  const selectedItem = items[selectedIndex]
                  if (selectedItem && editorRef) {
                    editorRef.chain().focus().deleteRange(props.range).run()
                    
                    editorRef.chain()
                      .focus()
                      .insertContent({
                        type: 'characterMention',
                        attrs: {
                          id: selectedItem.id,
                          label: selectedItem.label,
                        },
                      })
                      .run()
                    
                    popup?.hide()
                    return true
                  }
                }
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
