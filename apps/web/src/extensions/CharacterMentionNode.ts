import { Node, mergeAttributes } from '@tiptap/core'

export const CharacterMentionNode = Node.create({
  name: 'characterMention',
  
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      id: {
        default: '',
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attributes => ({
          'data-id': attributes.id,
        }),
      },
      label: {
        default: '',
        parseHTML: element => element.getAttribute('data-label'),
        renderHTML: attributes => ({
          'data-label': attributes.label,
        }),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-character-mention]',
        getAttrs: dom => ({
          id: dom.getAttribute('data-id') || '',
          label: dom.getAttribute('data-label') || '',
        }),
      },
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        'data-character-mention': '',
        'data-id': node.attrs.id,
        'data-label': node.attrs.label,
        class: 'character-mention',
        contenteditable: 'false',
      }),
      `@${node.attrs.label}`,
    ]
  },
})
