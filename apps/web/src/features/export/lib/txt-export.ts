import type { Script } from '../../../shared/types'
import {
  formatDateForExport,
  generateFileName,
  downloadBlob,
  parseScript,
} from './export-utils'

export async function exportToTXT(script: Script): Promise<void> {
  const lines: string[] = []
  const parsed = parseScript(script)

  lines.push(parsed.title)
  lines.push('='.repeat(parsed.title.length))
  lines.push('')

  if (parsed.author) {
    lines.push(`作者: ${parsed.author}`)
  }

  if (parsed.genre) {
    lines.push(`类型: ${parsed.genre}`)
  }

  if (parsed.logline) {
    lines.push('')
    lines.push(`故事梗概: ${parsed.logline}`)
  }

  if (parsed.createdAt) {
    lines.push(`创建日期: ${formatDateForExport(parsed.createdAt)}`)
  }

  lines.push('')
  lines.push('-'.repeat(50))
  lines.push('')

  for (const element of parsed.elements) {
    switch (element.type) {
      case 'scene':
        lines.push('')
        lines.push(element.text.toUpperCase())
        lines.push('')
        break

      case 'character':
        lines.push('')
        lines.push(centerText(element.text, 38))
        break

      case 'parenthetical':
        lines.push(centerText(`(${element.parenthetical})`, 35))
        break

      case 'dialogue':
        lines.push(indentText(element.text, 10))
        break

      case 'action':
        lines.push('')
        lines.push(element.text)
        lines.push('')
        break

      case 'transition':
        lines.push('')
        lines.push(rightAlignText(element.text.toUpperCase()))
        lines.push('')
        break
    }
  }

  const text = lines.join('\n')
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const fileName = generateFileName(script, 'txt')

  downloadBlob(blob, fileName)
}

function centerText(text: string, width: number): string {
  const padding = Math.max(0, Math.floor((width - text.length) / 2))
  return ' '.repeat(padding) + text
}

function indentText(text: string, spaces: number): string {
  const indent = ' '.repeat(spaces)
  return text.split('\n').map(line => indent + line).join('\n')
}

function rightAlignText(text: string): string {
  const width = 50
  const padding = Math.max(0, width - text.length)
  return ' '.repeat(padding) + text
}
