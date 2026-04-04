import { cn } from '../../../shared/lib'
import type { DiffLine as DiffLineType } from '../lib'

interface DiffLineProps {
  line: DiffLineType
  isActive?: boolean
}

export function DiffLine({ line, isActive }: DiffLineProps) {
  const bgColor =
    line.type === 'added'
      ? 'bg-green-100'
      : line.type === 'removed'
        ? 'bg-red-100'
        : 'bg-white'

  const textColor =
    line.type === 'added'
      ? 'text-green-800'
      : line.type === 'removed'
        ? 'text-red-800'
        : 'text-gray-700'

  const prefix =
    line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '

  return (
    <div
      className={cn(
        'flex font-mono text-sm border-l-4 transition-all',
        bgColor,
        textColor,
        isActive ? 'border-l-blue-500' : 'border-l-transparent'
      )}
    >
      {line.lineNumber && (
        <>
          <div className="w-12 px-2 text-right text-gray-400 select-none">
            {line.lineNumber.old ?? ''}
          </div>
          <div className="w-12 px-2 text-right text-gray-400 select-none border-r border-gray-200">
            {line.lineNumber.new ?? ''}
          </div>
        </>
      )}
      <div className="w-6 text-center select-none">{prefix}</div>
      <div className="flex-1 px-4 whitespace-pre">{line.value || '\u00A0'}</div>
    </div>
  )
}
