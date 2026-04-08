import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { DialogueNodeView } from '../../../components/Editor/nodeviews/DialogueNodeView'

export interface DialogueOptions {
  HTMLAttributes: Record<string, unknown>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    dialogue: {
      setDialogue: (attributes?: { character?: string; text?: string }) => ReturnType,
      toggleDialogue: () => ReturnType,
      insertDialogue: (attributes?: { character?: string; text?: string }) => ReturnType,
    }
  }
}

export const Dialogue = Node.create<DialogueOptions>({
  name: 'dialogue',

  group: 'block',

  content: 'inline*',

  defining: true,

  addAttributes() {
    return {
      character: {
        default: null,
        parseHTML: element => element.getAttribute('data-character'),
        renderHTML: attributes => {
          if (!attributes.character) {
            return {}
          }
          return {
            'data-character': attributes.character,
          }
        },
      },
      parenthetical: {
        default: null,
        parseHTML: element => element.getAttribute('data-parenthetical'),
        renderHTML: attributes => {
          if (!attributes.parenthetical) {
            return {}
          }
          return {
            'data-parenthetical': attributes.parenthetical,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="dialogue"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'dialogue',
        class: 'dialogue-block',
      }),
      0,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(DialogueNodeView)
  },

  addCommands() {
    return {
      setDialogue:
        (attributes) =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes)
        },
      toggleDialogue:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph')
        },
      insertDialogue:
        (attributes) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: attributes,
          })
        },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-2': () => this.editor.commands.insertDialogue(),
    }
  },
})
