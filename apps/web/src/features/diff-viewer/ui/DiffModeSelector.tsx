import { cn } from '../../../shared/lib'
import type { DiffMode } from '../lib'

interface DiffModeSelectorProps {
  mode: DiffMode
  onModeChange: (mode: DiffMode) => void
}

export function DiffModeSelector({ mode, onModeChange }: DiffModeSelectorProps) {
  const modes: { value: DiffMode; label: string }[] = [
    { value: 'line', label: '行级对比' },
    { value: 'word', label: '字级对比' },
    { value: 'char', label: '字符级对比' },
  ]

  return (
    <div className="flex gap-2">
      {modes.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onModeChange(value)}
          className={cn(
            'px-3 py-1.5 text-sm rounded-md transition-colors',
            mode === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
