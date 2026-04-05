import { useState, useEffect, useCallback } from 'react'
import type { SlashMenuItem } from './SlashCommand'

export { type SlashMenuItem }

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

  const scriptItems = filteredItems.filter(item => item.group === 'script' || !item.group)
  const formattingItems = filteredItems.filter(item => item.group === 'formatting')

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
          <>
            {scriptItems.length > 0 && (
              <div className="slash-menu-group">
                <div className="slash-menu-group-title">剧本元素</div>
                {scriptItems.map((item) => {
                  const globalIndex = filteredItems.indexOf(item)
                  return (
                    <button
                      key={item.command}
                      className={`slash-menu-item ${globalIndex === selectedIndex ? 'selected' : ''}`}
                      onClick={() => selectItem(globalIndex)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                    >
                      <span className="slash-menu-icon">{item.icon}</span>
                      <div className="slash-menu-content">
                        <div className="slash-menu-title">{item.title}</div>
                        <div className="slash-menu-description">{item.description}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
            {formatingItems.length > 0 && (
              <div className="slash-menu-group">
                <div className="slash-menu-group-title">文本格式</div>
                {formatingItems.map((item) => {
                  const globalIndex = filteredItems.indexOf(item)
                  return (
                    <button
                      key={item.command}
                      className={`slash-menu-item ${globalIndex === selectedIndex ? 'selected' : ''}`}
                      onClick={() => selectItem(globalIndex)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                    >
                      <span className="slash-menu-icon">{item.icon}</span>
                      <div className="slash-menu-content">
                        <div className="slash-menu-title">{item.title}</div>
                        <div className="slash-menu-description">{item.description}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
