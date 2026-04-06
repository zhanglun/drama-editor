import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { CharacterNodeData } from '../../../shared/types'
import { User } from 'lucide-react'

function CharacterNodeComponent({ data, selected }: NodeProps) {
  const nodeData = data as CharacterNodeData

  return (
    <div
      className={`
        relative rounded-lg border-2 bg-white shadow-sm min-w-[160px] transition-shadow
        ${selected ? 'shadow-md border-indigo-400' : 'border-gray-200 hover:shadow-md'}
      `}
    >
      <Handle type="source" position={Position.Bottom} className="!bg-indigo-400 !w-2 !h-2" />

      <div
        className="h-1.5 rounded-t-md"
        style={{ backgroundColor: nodeData.color || '#6366f1' }}
      />

      <div className="flex items-center gap-3 p-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: nodeData.color || '#6366f1' }}
        >
          {nodeData.avatarUrl ? (
            <img
              src={nodeData.avatarUrl}
              alt={nodeData.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            nodeData.name.charAt(0).toUpperCase()
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {nodeData.name}
          </div>
          {nodeData.variantCount > 0 && (
            <span className="inline-flex items-center mt-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700">
              {nodeData.variantCount} 个形象
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export const CharacterNode = memo(CharacterNodeComponent)
