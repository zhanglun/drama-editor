import { useState, useMemo } from 'react'
import type { Script } from '../../../shared/types'

export function useScriptFilters(scripts: Script[]) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredScripts = useMemo(() => {
    if (!searchQuery.trim()) {
      return scripts
    }

    const query = searchQuery.toLowerCase()
    return scripts.filter(script => {
      const titleMatch = script.title.toLowerCase().includes(query)
      const descriptionMatch = script.description?.toLowerCase().includes(query) || false

      let contentMatch = false
      if (script.content?.content) {
        const contentText = script.content.content
          .map(node => node.text || '')
          .join(' ')
          .toLowerCase()
        contentMatch = contentText.includes(query)
      }

      return titleMatch || descriptionMatch || contentMatch
    })
  }, [scripts, searchQuery])

  return {
    searchQuery,
    setSearchQuery,
    filteredScripts,
  }
}
