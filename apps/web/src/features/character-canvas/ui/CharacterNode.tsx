import { memo } from 'react'
import { Position, type NodeProps } from '@xyflow/react'
import { CustomHandle } from './CustomHandle'
import type { CharacterNodeData } from '../../../shared/types'

function CharacterNodeComponent({ data, selected }: NodeProps) {
  const nodeData = data as unknown as CharacterNodeData
  const onHandleInteraction = (nodeData as any).onHandleInteraction

  return (
    <div
      className={`
        group relative rounded-lg border-2 bg-white shadow-sm min-w-[160px] transition-shadow
        ${selected ? 'shadow-md border-indigo-400' : 'border-gray-200 hover:shadow-md'}
      `}
    >
      <CustomHandle
        type="source"
        position={Position.Right}
        color={nodeData.color || '#6366f1'}
        onInteraction={(interaction) => {
          onHandleInteraction?.(interaction)
        }}
      />

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
