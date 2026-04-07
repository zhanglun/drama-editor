import {
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from 'docx'

export function createTitleParagraph(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.TITLE,
    spacing: { after: 400 },
  })
}

export function createAuthorParagraph(author: string): Paragraph {
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

export function createGenreParagraph(genre: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: `类型: ${genre}`,
      }),
    ],
    spacing: { after: 200 },
  })
}

export function createLoglineParagraph(logline: string): Paragraph {
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

export function createNotesParagraph(notes: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: notes,
      }),
    ],
    spacing: { after: 200 },
  })
}

export function createEmptyParagraph(): Paragraph {
  return new Paragraph({ text: '' })
}

export function createSeparatorParagraph(): Paragraph {
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

export function createSceneParagraph(text: string): Paragraph {
  return new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 400 },
  })
}

export function createActionParagraph(text: string): Paragraph {
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

export function createCharacterParagraph(character: string, text: string): Paragraph {
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

export function createParentheticalParagraph(text: string): Paragraph {
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

export function createDialogueParagraph(text: string): Paragraph {
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

export function createTransitionParagraph(text: string): Paragraph {
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
