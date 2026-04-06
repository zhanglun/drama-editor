import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { TransitionNodeView } from '../components/Editor/nodeviews/TransitionNodeView'

export interface TransitionOptions {
  HTMLAttributes: Record<string, unknown>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    transition: {
      setTransition: (attributes?: { description?: string }) => ReturnType,
      toggleTransition: () => ReturnType,
      insertTransition: (attributes?: { description?: string }) => ReturnType,
    }
  }
}

export const Transition = Node.create<TransitionOptions>({
  name: 'transition',

  group: 'block',

  content: 'text*',

  defining: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="transition"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'transition',
        class: 'transition-element',
      }),
      0,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(TransitionNodeView)
  },

  addCommands() {
    return {
      setTransition:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name)
        },
      toggleTransition:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph')
        },
      insertTransition:
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
      'Mod-4': () => this.editor.commands.insertTransition(),
    }
  },
})
