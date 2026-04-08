import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { SceneNodeView } from '../../../components/Editor/nodeviews/SceneNodeView'

export interface SceneOptions {
  HTMLAttributes: Record<string, unknown>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    scene: {
      setScene: (attributes?: { heading?: string }) => ReturnType,
      toggleScene: () => ReturnType,
      insertScene: (attributes?: { heading?: string }) => ReturnType,
    }
  }
}

export const Scene = Node.create<SceneOptions>({
  name: 'scene',

  group: 'block',

  content: 'inline*',

  defining: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="scene"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'scene',
        class: 'scene-heading',
      }),
      0,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(SceneNodeView)
  },

  addCommands() {
    return {
      setScene:
        (attributes) =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes)
        },
      toggleScene:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph')
        },
      insertScene:
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
      'Mod-1': () => this.editor.commands.insertScene(),
    }
  },
})
