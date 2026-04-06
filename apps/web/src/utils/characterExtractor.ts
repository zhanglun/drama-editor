import type { ScriptContent } from '../types'

export function extractCharacters(content: ScriptContent): string[] {
  const characters = new Set<string>()

  function traverseNodes(nodes: typeof content.content) {
    if (!nodes || !Array.isArray(nodes)) return

    for (const node of nodes) {
      if (node.type === 'dialogue' && node.attrs?.character) {
        characters.add(node.attrs.character as string)
      }

      if (node.type === 'characterMention' && node.attrs?.label) {
        characters.add(node.attrs.label as string)
      }

      if (node.content) {
        traverseNodes(node.content)
      }
    }
  }

  traverseNodes(content.content)

  return Array.from(characters).sort()
}

export function updateCharactersInContent(
  content: ScriptContent,
  oldName: string,
  newName: string
): ScriptContent {
  function updateNodes(nodes: typeof content.content): typeof content.content {
    if (!nodes || !Array.isArray(nodes)) return nodes

    return nodes.map(node => {
      if (node.type === 'dialogue' && node.attrs?.character === oldName) {
        return {
          ...node,
          attrs: {
            ...node.attrs,
            character: newName
          }
        }
      }

      if (node.content) {
        return {
          ...node,
          content: updateNodes(node.content)
        }
      }

      return node
    })
  }

  return {
    ...content,
    content: updateNodes(content.content)
  }
}
