import { Plus, X } from 'lucide-react'

interface TraitsEditorProps {
  traits: Record<string, unknown>
  onChange: (traits: Record<string, unknown>) => void
  readOnly?: boolean
}

export function TraitsEditor({ traits, onChange, readOnly = false }: TraitsEditorProps) {
  const entries = Object.entries(traits)

  const handleKeyChange = (index: number, newKey: string) => {
    const newEntries = [...entries]
    const [_, value] = newEntries[index]
    newEntries[index] = [newKey, value]
    updateTraits(newEntries)
  }

  const handleValueChange = (index: number, newValue: string) => {
    const newEntries = [...entries]
    const [key] = newEntries[index]
    newEntries[index] = [key, newValue]
    updateTraits(newEntries)
  }

  const handleDelete = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index)
    updateTraits(newEntries)
  }

  const handleAdd = () => {
    const newEntries: [string, unknown][] = [...entries, ['', '']]
    updateTraits(newEntries)
  }

  const updateTraits = (entries: [string, unknown][]) => {
    const newTraits: Record<string, unknown> = {}
    entries.forEach(([key, value]) => {
      if (key.trim() !== '' || String(value).trim() !== '') {
        newTraits[key] = value
      }
    })
    onChange(newTraits)
  }

  if (readOnly) {
    return (
      <div className="flex flex-wrap gap-2">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
          >
            <span className="font-medium">{key}:</span>
            <span>{String(value)}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {entries.map(([key, value], index) => (
        <div key={index} className="flex gap-2 items-center">
          <input
            type="text"
            value={key}
            onChange={(e) => handleKeyChange(index, e.target.value)}
            placeholder="属性名"
            className="w-24 px-2 py-1 text-xs font-medium border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            value={String(value)}
            onChange={(e) => handleValueChange(index, e.target.value)}
            placeholder="属性值"
            className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => handleDelete(index)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="删除属性"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={handleAdd}
        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Plus className="w-3 h-3" />
        <span>添加属性</span>
      </button>
    </div>
  )
}
