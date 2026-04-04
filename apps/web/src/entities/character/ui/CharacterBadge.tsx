import type { Character } from '../../../shared/types'

interface CharacterBadgeProps {
  character: Character | string
  className?: string
}

export function CharacterBadge({ character, className = '' }: CharacterBadgeProps) {
  const name = typeof character === 'string' ? character : character.name
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 ${className}`}>
      {name}
    </span>
  )
}
