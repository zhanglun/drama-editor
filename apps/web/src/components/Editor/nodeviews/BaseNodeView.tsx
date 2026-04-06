import { NodeViewWrapper } from '@tiptap/react'
import type { Editor } from '@tiptap/core'
import { NodeToolbar } from './NodeToolbar'

interface BaseNodeViewProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  colorScheme: 'blue' | 'purple' | 'green' | 'orange'
  selected: boolean
  editor: Editor
  getPos: () => number | undefined
  deleteNode: () => void
  children: React.ReactNode
}

// Tailwind CSS needs full class names at build time for purging
// Dynamic class names like `from-${color}-50` will NOT work
const colorClasses = {
  blue: {
    bg: 'bg-gradient-to-r from-blue-50 to-blue-100',
    border: 'border-blue-500',
    ring: 'ring-blue-400',
    text: 'text-blue-600',
  },
  purple: {
    bg: 'bg-gradient-to-r from-purple-50 to-purple-100',
    border: 'border-purple-500',
    ring: 'ring-purple-400',
    text: 'text-purple-600',
  },
  green: {
    bg: 'bg-gradient-to-r from-green-50 to-green-100',
    border: 'border-green-500',
    ring: 'ring-green-400',
    text: 'text-green-600',
  },
  orange: {
    bg: 'bg-gradient-to-r from-orange-50 to-orange-100',
    border: 'border-orange-500',
    ring: 'ring-orange-400',
    text: 'text-orange-600',
  },
}

export function BaseNodeView({
  label,
  icon: Icon,
  colorScheme,
  selected,
  editor,
  getPos,
  deleteNode,
  children,
}: BaseNodeViewProps) {
  const colors = colorClasses[colorScheme]

  return (
    <NodeViewWrapper>
      <div
        className={`group relative p-4 ${colors.bg} dark:border-l-4 ${colors.border} transition-all duration-200 ${
          selected ? `ring-2 ${colors.ring} shadow-lg` : 'hover:shadow-md'
        }`}
      >
        <NodeToolbar editor={editor} getPos={getPos} onDelete={deleteNode} />
        <div className="flex items-center gap-2 mb-2">
          <Icon className={`w-4 h-4 ${colors.text}`} />
          <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wider`}>
            {label}
          </span>
        </div>
        {children}
      </div>
    </NodeViewWrapper>
  )
}
