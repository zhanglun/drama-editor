import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Plus, Link2 } from 'lucide-react'

interface HandleMenuProps {
  x: number
  y: number
  nodeId: string
  nodeType: 'character' | 'variant'
  mode: 'click' | 'drag'
  onSelect: (action: string) => void
  onClose: () => void
}

export function HandleMenu({ x, y, nodeId, nodeType, mode, onSelect, onClose }: HandleMenuProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isEntering, setIsEntering] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsEntering(true)
    })

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsEntering(false)
        setTimeout(onClose, 150)
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsEntering(false)
        setTimeout(onClose, 150)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const handleSelect = (action: string) => {
    setIsEntering(false)
    setTimeout(() => {
      onSelect(action)
      onClose()
    }, 150)
  }

  return createPortal(
    <div
      ref={ref}
      className="fixed z-50 rounded-lg border border-gray-200 bg-white shadow-lg py-1 min-w-[160px]"
      style={{ 
        left: x, 
        top: y,
        transform: `scale(${isEntering ? 1 : 0.95})`,
        opacity: isEntering ? 1 : 0,
        transition: 'transform 150ms ease, opacity 150ms ease'
      }}
    >
      <div className="px-3 py-1.5 text-xs text-gray-500 font-medium">
        {mode === 'click' ? '点击操作' : '拖拽操作'}
      </div>
      
      <button
        onClick={() => handleSelect('create-child')}
        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
      >
        <Plus className="w-4 h-4" />
        新建子形象
      </button>
      
      <button
        onClick={() => handleSelect('create-connection')}
        className="w-full px-3 py-2 text-left text-sm text-gray-400 flex items-center gap-2 transition-colors cursor-not-allowed"
        disabled
      >
        <Link2 className="w-4 h-4" />
        创建连接
        <span className="ml-auto text-xs text-gray-300">即将推出</span>
      </button>
    </div>,
    document.body
  )
}
