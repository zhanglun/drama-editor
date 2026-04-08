import { useState, useEffect, useRef } from 'react'

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
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  const selectItem = (index: number) => {
    const item = filteredItems[index]
    if (item) {
      command(item)
    }
  }

  useEffect(() => {
    setSelectedIndex(0)
  }, [filteredItems.length])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="mention-menu">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索角色..."
        className="mention-menu-input"
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
