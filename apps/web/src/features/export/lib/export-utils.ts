import type { Script, ScriptContent, ScriptNode } from '../../../shared/types'

export type ExportElementType = 'scene' | 'character' | 'parenthetical' | 'dialogue' | 'action' | 'transition'

export interface ExportElement {
  type: ExportElementType
  text: string
  character?: string
  parenthetical?: string
}

export interface ParsedScript {
  title: string
  author?: string
  genre?: string
  logline?: string
  notes?: string
  createdAt?: string
  elements: ExportElement[]
}

export function formatScriptTitle(script: Script): string {
  return script.title || '未命名剧本'
}

export function generateFileName(script: Script, extension: string): string {
  const title = formatScriptTitle(script)
  const sanitized = title.replace(/[<>:"/\\|?*]/g, '_')
  return `${sanitized}.${extension}`
}

export function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function extractTextFromNode(node: ScriptNode): string {
  if (node.text) {
    return node.text
  }
  if (node.content && Array.isArray(node.content)) {
    return node.content.map(child => extractTextFromNode(child)).join('')
  }
  return ''
}

export function parseScriptContent(content: ScriptContent): ExportElement[] {
  const elements: ExportElement[] = []

  if (!content || !content.content) {
    return elements
  }

  function processNode(node: ScriptNode): void {
    const nodeType = node.type

    switch (nodeType) {
      case 'scene':
        elements.push({
          type: 'scene',
          text: (node.attrs?.heading as string) || extractTextFromNode(node),
        })
        break

      case 'dialogue':
        const character = (node.attrs?.character as string) || ''
        const parenthetical = (node.attrs?.parenthetical as string) || ''
        const dialogueText = extractTextFromNode(node)

        if (character) {
          elements.push({
            type: 'character',
            text: character.toUpperCase(),
            character,
          })
        }
        if (parenthetical) {
          elements.push({
            type: 'parenthetical',
            text: `(${parenthetical})`,
            character,
            parenthetical,
          })
        }
        if (dialogueText) {
          elements.push({
            type: 'dialogue',
            text: dialogueText,
            character,
          })
        }
        break

      case 'action':
        elements.push({
          type: 'action',
          text: extractTextFromNode(node),
        })
        break

      case 'transition':
        elements.push({
          type: 'transition',
          text: ((node.attrs?.text as string) || extractTextFromNode(node)).toUpperCase(),
        })
        break

      case 'paragraph':
        const text = extractTextFromNode(node)
        if (text.trim()) {
          elements.push({
            type: 'action',
            text,
          })
        }
        break

      default:
        if (node.content && Array.isArray(node.content)) {
          node.content.forEach(processNode)
        }
    }
  }

  content.content.forEach(node => {
    if (node.type === 'doc' && node.content) {
      node.content.forEach(processNode)
    } else {
      processNode(node)
    }
  })

  return elements
}

export function parseScript(script: Script): ParsedScript {
  const metadata = script.content?.metadata

  return {
    title: script.title || '未命名剧本',
    author: metadata?.author || script.author,
    genre: metadata?.genre || script.genre,
    logline: metadata?.logline || script.logline,
    notes: metadata?.notes || script.notes,
    createdAt: script.created_at,
    elements: script.content ? parseScriptContent(script.content) : [],
  }
}

export function extractTextFromContent(content: ScriptContent): string {
  const elements = parseScriptContent(content)
  return elements.map(el => {
    switch (el.type) {
      case 'scene':
        return `\n${el.text.toUpperCase()}\n`
      case 'character':
        return `\n                    ${el.text}`
      case 'parenthetical':
        return `                   ${el.text}`
      case 'dialogue':
        return `          ${el.text}`
      case 'action':
        return `\n${el.text}\n`
      case 'transition':
        return `\n                                        ${el.text}\n`
      default:
        return el.text
    }
  }).join('\n')
}

export function formatDateForExport(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
