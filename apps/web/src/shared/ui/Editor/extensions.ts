import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Placeholder from '@tiptap/extension-placeholder'
import { Scene, Dialogue, Action, Transition } from '../../../extensions'

export const getEditorExtensions = (placeholder: string = '开始编写你的剧本...') => [
  StarterKit,
  CharacterCount,
  Placeholder.configure({
    placeholder,
  }),
  Scene,
  Dialogue,
  Action,
  Transition,
]

export { Scene, Dialogue, Action, Transition }
