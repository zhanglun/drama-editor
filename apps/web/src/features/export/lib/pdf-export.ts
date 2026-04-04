import { jsPDF } from 'jspdf'
import type { Script } from '../../../shared/types'
import {
  formatDateForExport,
  generateFileName,
  parseScript,
} from './export-utils'

interface PDFFormatConfig {
  sceneTopMargin: number
  actionTopMargin: number
  characterLeftMargin: number
  dialogueLeftMargin: number
  parentheticalLeftMargin: number
  transitionRightMargin: number
  bottomMargin: number
  lineHeight: number
  fontSize: number
  pageWidth: number
  pageHeight: number
}
const STANDARD_FORMAT: PDFFormatConfig = {
  sceneTopMargin: 25.4,
  actionTopMargin: 25.4,
  characterLeftMargin: 101.6,
  dialogueLeftMargin: 63.5,
  parentheticalLeftMargin: 76.2,
  transitionRightMargin: 165.1,
  bottomMargin: 25.4,
  lineHeight: 4.23,
  fontSize: 12,
  pageWidth: 215.9,
  pageHeight: 279.4,
}
export async function exportToPDF(script: Script): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })
  const format = STANDARD_FORMAT
  const { pageWidth, pageHeight, bottomMargin, lineHeight, fontSize } = format
  let yPosition = bottomMargin
  doc.setFont('Courier', 'normal')
  doc.setFontSize(fontSize)
  const title = script.title || '未命名剧本'
  doc.setFontSize(24)
  doc.text(title, pageWidth / 2, yPosition, { align: 'center' })
  yPosition += lineHeight * 2
  const metadata = script.content?.metadata
  if (metadata?.author) {
    doc.setFontSize(fontSize)
    doc.text(`作者: ${metadata.author}`, pageWidth / 2, yPosition, {
      align: 'center',
    })
    yPosition += lineHeight * 2
  }
  if (metadata?.genre) {
    doc.setFontSize(10)
    doc.text(`类型: ${metadata.genre}`, pageWidth / 2, yPosition, {
      align: 'center',
    })
    yPosition += lineHeight
  }
  if (script.created_at) {
    doc.setFontSize(10)
    doc.text(
      formatDateForExport(script.created_at),
      pageWidth / 2,
      yPosition,
      { align: 'center' }
    )
    yPosition += lineHeight * 3
  }
  yPosition = bottomMargin
  doc.addPage()
  doc.setFont('Courier', 'normal')
  doc.setFontSize(fontSize)
  const parsed = parseScript(script)
  for (const element of parsed.elements) {
    if (yPosition > pageHeight - bottomMargin - lineHeight) {
      doc.addPage()
      yPosition = bottomMargin
      doc.setFont('Courier', 'normal')
      doc.setFontSize(fontSize)
    }
    switch (element.type) {
      case 'scene':
        doc.setFont('Courier', 'bold')
        const sceneText = element.text.toUpperCase()
        doc.text(sceneText, format.sceneTopMargin, yPosition)
        yPosition += lineHeight * 2
        doc.setFont('Courier', 'normal')
        break
      case 'action':
        const actionLines = wrapText(element.text, pageWidth - format.actionTopMargin * 2)
        for (const line of actionLines) {
          if (yPosition > pageHeight - bottomMargin - lineHeight) {
            doc.addPage()
            yPosition = bottomMargin
            doc.setFont('Courier', 'normal')
            doc.setFontSize(fontSize)
          }
          doc.text(line, format.actionTopMargin, yPosition)
          yPosition += lineHeight
        }
        yPosition += lineHeight
        break
      case 'character':
        doc.setFont('Courier', 'bold')
        doc.text(element.text, format.characterLeftMargin, yPosition)
        yPosition += lineHeight
        doc.setFont('Courier', 'normal')
        break
      case 'parenthetical':
        const parenText = `(${element.parenthetical})`
        doc.text(parenText, format.parentheticalLeftMargin, yPosition)
        yPosition += lineHeight
        break
      case 'dialogue':
        const dialogueLines = wrapText(element.text, pageWidth - format.dialogueLeftMargin - 50)
        for (const line of dialogueLines) {
          if (yPosition > pageHeight - bottomMargin - lineHeight) {
            doc.addPage()
            yPosition = bottomMargin
            doc.setFont('Courier', 'normal')
            doc.setFontSize(fontSize)
          }
          doc.text(line, format.dialogueLeftMargin, yPosition)
          yPosition += lineHeight
        }
        yPosition += lineHeight
        break
      case 'transition':
        const transText = element.text.toUpperCase()
        const textWidth = doc.getTextWidth(transText)
        doc.text(
          transText,
          pageWidth - format.transitionRightMargin - textWidth,
          yPosition
        )
        yPosition += lineHeight * 2
        break
    }
  }
  const fileName = generateFileName(script, 'pdf')
  doc.save(fileName)
}
function wrapText(text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''
  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    const testWidth = 0
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  }
  if (currentLine) {
    lines.push(currentLine)
  }
  return lines.length > 0 ? lines : [text]
}
