import { Document, Packer } from 'docx'
import type { Script } from '../../../shared/types'
import { generateFileName, parseScript } from './export-utils'
import {
  createTitleParagraph,
  createAuthorParagraph,
  createGenreParagraph,
  createLoglineParagraph,
  createNotesParagraph,
  createEmptyParagraph,
  createSeparatorParagraph,
  createSceneParagraph,
  createActionParagraph,
  createCharacterParagraph,
  createParentheticalParagraph,
  createDialogueParagraph,
  createTransitionParagraph,
} from './docx-helpers'
import type { Paragraph } from 'docx'

export async function exportToDOCX(script: Script): Promise<void> {
  const parsed = parseScript(script)
  const children: Paragraph[] = []
  
  children.push(createTitleParagraph(parsed.title))
  
  const metadata = script.content?.metadata
  if (metadata?.author) {
    children.push(createAuthorParagraph(metadata.author))
  }
  if (metadata?.genre) {
    children.push(createGenreParagraph(metadata.genre))
  }
  if (metadata?.logline) {
    children.push(createLoglineParagraph(metadata.logline))
  }
  if (metadata?.notes) {
    children.push(createNotesParagraph(metadata.notes))
  }
  
  children.push(createEmptyParagraph())
  children.push(createSeparatorParagraph())
  children.push(createEmptyParagraph())
  
  parsed.elements.forEach((element) => {
    switch (element.type) {
      case 'scene':
        children.push(createSceneParagraph(element.text))
        break
      case 'action':
        children.push(createActionParagraph(element.text))
        break
      case 'character':
        children.push(createCharacterParagraph(element.character || '', element.text))
        break
      case 'parenthetical':
        children.push(createParentheticalParagraph(element.text))
        break
      case 'dialogue':
        children.push(createDialogueParagraph(element.text))
        break
      case 'transition':
        children.push(createTransitionParagraph(element.text))
        break
      default:
        if (element.text.trim()) {
          children.push(createActionParagraph(element.text))
        }
    }
  })
  
  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  })
  
  const blob = await Packer.toBlob(doc)
  const fileName = generateFileName(script, 'docx')
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
