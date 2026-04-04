import type { Script } from '../../../shared/types'

interface ScriptTitleProps {
  script: Script
  className?: string
}

export function ScriptTitle({ script, className = '' }: ScriptTitleProps) {
  return (
    <h1 className={`text-2xl font-bold text-gray-900 ${className}`}>
      {script.title}
    </h1>
  )
}
