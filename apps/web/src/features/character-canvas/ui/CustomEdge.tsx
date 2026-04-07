import { BaseEdge, EdgeLabelRenderer, getBezierPath, type EdgeProps, Position } from '@xyflow/react'

interface CustomEdgeProps extends EdgeProps {
  sourceSelected?: boolean
  targetSelected?: boolean
}

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  sourceSelected,
  targetSelected,
}: CustomEdgeProps) {
  const offset = 12
  const adjustedSourceX = sourcePosition === Position.Right ? sourceX - offset : sourceX + offset
  const adjustedTargetX = targetPosition === Position.Left ? targetX + offset : targetX - offset

  const [edgePath] = getBezierPath({
    sourceX: adjustedSourceX,
    sourceY,
    sourcePosition,
    targetX: adjustedTargetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          ...style,
          strokeWidth: 1.5,
        }}
      />
      {/* Source端连接部bar - 仅在source节点未选中时显示 */}
      {!sourceSelected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${adjustedSourceX}px, ${sourceY}px)`,
              pointerEvents: 'none',
            }}
            className="w-[3px] h-4 bg-slate-400 rounded-sm"
          />
        </EdgeLabelRenderer>
      )}
      {/* Target端连接部bar - 仅在target节点未选中时显示 */}
      {!targetSelected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${adjustedTargetX}px, ${targetY}px)`,
              pointerEvents: 'none',
            }}
            className="w-[3px] h-4 bg-slate-400 rounded-sm"
          />
        </EdgeLabelRenderer>
      )}
    </>
  )
}
