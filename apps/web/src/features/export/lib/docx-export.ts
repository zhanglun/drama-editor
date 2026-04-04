import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  Packer,
  AlignmentType,
} from 'docx'
import type { Script } from '../../../shared/types'
import {
  generateFileName,
  parseScript,
} from './export-utils'

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

function createTitleParagraph(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.TITLE,
    spacing: { after: 400 },
  })
}

function createAuthorParagraph(author: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: `作者: ${author}`,
        italics: true,
      }),
    ],
    spacing: { after: 200 },
  })
}

function createGenreParagraph(genre: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: `类型: ${genre}`,
      }),
    ],
    spacing: { after: 200 },
  })
}

function createLoglineParagraph(logline: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: logline,
        italics: true,
      }),
    ],
    spacing: { after: 200 },
  })
}

function createNotesParagraph(notes: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: notes,
      }),
    ],
    spacing: { after: 200 },
  })
}

function createEmptyParagraph(): Paragraph {
  return new Paragraph({ text: '' })
}

function createSeparatorParagraph(): Paragraph {
  return new Paragraph({
    border: {
      bottom: {
        color: 'auto',
        space: 1,
        size: 6,
        style: 'single',
      },
    },
    children: [],
  })
}

function createSceneParagraph(text: string): Paragraph {
  return new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 400 },
  })
}

function createActionParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: 'Courier New',
        size: 24,
      }),
    ],
    spacing: { after: 200 },
  })
}

function createCharacterParagraph(character: string, text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: character || '',
        bold: true,
      }),
      new TextRun({
        text,
        font: 'Courier New',
        size: 24,
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
  })
}

function createParentheticalParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: 'Courier New',
        size: 24,
        italics: true,
      }),
    ],
    alignment: AlignmentType.CENTER,
    indent: { left: 1440 * 2 },
    spacing: { after: 100 },
  })
}

function createDialogueParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        font: 'Courier New',
        size: 24,
      }),
    ],
    alignment: AlignmentType.CENTER,
    indent: { left: 1440 * 1 },
    spacing: { after: 200 },
  })
}

function createTransitionParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        font: 'Courier New',
        size: 24,
      }),
    ],
    alignment: AlignmentType.RIGHT,
    spacing: { after: 400 },
  })
}
