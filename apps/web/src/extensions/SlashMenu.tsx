import { useState, useEffect, useCallback } from 'react'

export interface SlashMenuItem {
  title: string
  description: string
  command: string
  icon: string
}

interface SlashMenuProps {
  items: SlashMenuItem[]
  command: (item: SlashMenuItem) => void
}

export function SlashMenu({ items, command }: SlashMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [query, setQuery] = useState('')

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
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
    <div className="slash-menu">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索命令..."
        className="slash-menu-input"
        autoFocus
      />
      <div className="slash-menu-list">
        {filteredItems.length === 0 ? (
          <div className="slash-menu-empty">没有匹配的命令</div>
        ) : (
          filteredItems.map((item, index) => (
            <button
              key={item.command}
              className={`slash-menu-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => selectItem(index)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="slash-menu-icon">{item.icon}</span>
              <div className="slash-menu-content">
                <div className="slash-menu-title">{item.title}</div>
                <div className="slash-menu-description">{item.description}</div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
