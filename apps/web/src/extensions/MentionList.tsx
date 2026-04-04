import { useState, useEffect, useCallback } from 'react'

interface MentionItem {
  id: string
  label: string
}

interface MentionListProps {
  items: MentionItem[]
  command: (item: MentionItem) => void
}

export function MentionList({ items, command }: MentionListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [query, setQuery] = useState('')

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  const selectItem = useCallback((index: number) => {
    const item = filteredItems[index]
    if (item) {
      command(item)
    }
  }, [filteredItems, command])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredItems.length - 1
        )
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredItems.length - 1 ? prev + 1 : 0
        )
      } else if (e.key === 'Enter') {
        e.preventDefault()
        selectItem(selectedIndex)
      } else if (e.key === 'Escape') {
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredItems.length, selectedIndex, selectItem])

  return (
    <div className="mention-menu">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索角色..."
        className="mention-menu-input"
        autoFocus
      />
      <div className="mention-menu-list">
        {filteredItems.length === 0 ? (
          <div className="mention-menu-empty">没有匹配的角色</div>
        ) : (
          filteredItems.map((item, index) => (
            <button
              key={item.id}
              className={`mention-menu-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => selectItem(index)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="mention-menu-avatar">👤</span>
              <span className="mention-menu-name">{item.label}</span>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
