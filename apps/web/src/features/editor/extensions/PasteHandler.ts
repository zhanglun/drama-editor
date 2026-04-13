import { Extension } from '@tiptap/core'
import { Slice, Fragment } from '@tiptap/pm/model'
import { Plugin } from '@tiptap/pm/state'

export const PasteHandler = Extension.create({
  name: 'pasteHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (view, event) => {
            // 如果是编辑器内部拖拽/粘贴（ProseMirror 自身的序列化数据），放行
            const html = event.clipboardData?.getData('text/html') ?? ''
            if (html.includes('data-pm-slice')) {
              return false
            }

            const text = event.clipboardData?.getData('text/plain')
            if (!text) {
              return false
            }

            event.preventDefault()

            const { schema, tr } = view.state
            const marks = view.state.selection.$from.marks()

            const lines = text.replace(/\r\n?/g, '\n').split('\n')

            const paragraphs = lines.map((line) => {
              return schema.nodes.paragraph.create(
                null,
                line ? schema.text(line, marks) : null,
              )
            })

            const slice = new Slice(Fragment.from(paragraphs), 0, 0)
            view.dispatch(tr.replaceSelection(slice))
            return true
          },
        },
      }),
    ]
  },
})
