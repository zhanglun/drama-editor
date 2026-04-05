import { Node, mergeAttributes } from '@tiptap/core'

export interface ActionOptions {
  HTMLAttributes: Record<string, unknown>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    action: {
      setAction: (attributes?: { description?: string }) => ReturnType,
      toggleAction: () => ReturnType,
      insertAction: (attributes?: { description?: string }) => ReturnType,
    }
  }
}

export const Action = Node.create<ActionOptions>({
  name: 'action',

  group: 'block',

  content: 'inline*',

  defining: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="action"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'action',
        class: 'action-description',
      }),
      0,
    ]
  },

  addCommands() {
    return {
      setAction:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name)
        },
      toggleAction:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph')
        },
      insertAction:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
          })
        },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-3': () => this.editor.commands.insertAction(),
    }
  },
})
