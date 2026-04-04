import Mention from '@tiptap/extension-mention'
import { ReactRenderer } from '@tiptap/react'
import tippy, { Instance } from 'tippy.js'
import { MentionList } from './MentionList'

export const CharacterMention = Mention.extend({
  name: 'characterMention',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'character-mention',
      },
      suggestion: {
        char: '@',
        items: ({ query }: { query: string }) => {
          const characters = content?.characters || []
          return characters
            .filter(name => name.toLowerCase().includes(query.toLowerCase()))
            .map((name, index) => ({
              id: name,
              label: name,
            }))
        },
        render: () => {
          let component: any = null
          let popup: Instance | null = null
          const items = props.items
          const characters = content?.characters || []
          
          return {
            suggestion: items(props.items),
          } as Partial<SuggestionOptions>
        },
      }
    },
  },
})
