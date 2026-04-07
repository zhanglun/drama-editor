import { useCallback } from 'react'
import type { Node } from '@xyflow/react'

interface UseNodeDragParams {
  updateNodePosition: (nodeId: string, data: { canvas_position: { x: number; y: number } }) => void
}

export function useNodeDrag({ updateNodePosition }: UseNodeDragParams) {
  const handleNodeDragStop = useCallback(
    (_: React.MouseEvent, node: Node) => {
      // TODO: Phase 4 task 4.3 - fix type safety for node position update
      // canvas_position is not in CharacterNodeData/VariantNodeData but is stored in node data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateNodePosition(node.id, { canvas_position: { x: node.position.x, y: node.position.y } } as any)
    },
    [updateNodePosition],
  )

  return { handleNodeDragStop }
}
