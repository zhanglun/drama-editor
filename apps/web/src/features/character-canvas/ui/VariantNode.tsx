import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { VariantNodeData } from '../../../shared/types'

function VariantNodeComponent({ data, selected }: NodeProps) {
  const nodeData = data as VariantNodeData
  const traitEntries = Object.entries(nodeData.traits || {}).slice(0, 3)

  return (
    <div
      className={`
        relative rounded-lg border-2 bg-white shadow-sm min-w-[150px] transition-shadow
        ${selected ? 'shadow-md border-emerald-400' : 'border-gray-200 hover:shadow-md'}
      `}
    >
      <Handle type="target" position={Position.Top} className="!bg-emerald-400 !w-2 !h-2" />
      <Handle type="source" position={Position.Bottom} className="!bg-emerald-400 !w-2 !h-2" />

      <div
        className="h-1 rounded-t-md"
        style={{ backgroundColor: nodeData.color || '#10b981' }}
      />

      <div className="flex items-center gap-3 p-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-lg text-white text-sm shrink-0 overflow-hidden"
          style={{ backgroundColor: nodeData.color || '#10b981' }}
        >
          {nodeData.imageUrl ? (
            <img
              src={nodeData.imageUrl}
              alt={nodeData.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
          ) : (
            nodeData.name.charAt(0).toUpperCase()
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {nodeData.name}
          </div>
          {nodeData.sceneCount > 0 && (
            <span className="inline-flex items-center mt-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
              {nodeData.sceneCount} 个场景
            </span>
          )}
        </div>
      </div>

      {traitEntries.length > 0 && (
        <div className="px-3 pb-2 flex flex-wrap gap-1">
          {traitEntries.map(([key, value]) => (
            <span
              key={key}
              className="px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600"
            >
              {key}: {String(value)}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export const VariantNode = memo(VariantNodeComponent)
