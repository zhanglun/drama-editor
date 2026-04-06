import { useRef } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Plus } from 'lucide-react'

interface CustomHandleProps {
  type: 'source' | 'target'
  position: Position.Left | Position.Right
  color: string
  onInteraction?: (params: { mode: 'click' | 'drag'; position: { x: number; y: number } }) => void
}

export function CustomHandle({ type, position, color, onInteraction }: CustomHandleProps) {
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null)
  const isDragging = useRef(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    mouseDownPos.current = { x: e.clientX, y: e.clientY }
    isDragging.current = false
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!mouseDownPos.current) return

    const dx = e.clientX - mouseDownPos.current.x
    const dy = e.clientY - mouseDownPos.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance >= 5) {
      isDragging.current = true
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (!mouseDownPos.current) return

    const dx = e.clientX - mouseDownPos.current.x
    const dy = e.clientY - mouseDownPos.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    const mode = distance < 5 ? 'click' : 'drag'
    
    onInteraction?.({
      mode,
      position: { x: e.clientX, y: e.clientY }
    })

    mouseDownPos.current = null
    isDragging.current = false
  }

  const handleMouseEnter = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseLeave = () => {
    if (!mouseDownPos.current) {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }

  return (
    <Handle
      type={type}
      position={position}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      className="!w-6 !h-6 !border-2 !border-white !rounded-full !opacity-0 group-hover:!opacity-100 !flex !items-center !justify-center"
      style={{ 
        backgroundColor: color,
        [position === Position.Right ? 'right' : 'left']: '-12px'
      }}
    >
      <Plus className="w-3.5 h-3.5 text-white pointer-events-none" strokeWidth={2.5} />
    </Handle>
  )
}
