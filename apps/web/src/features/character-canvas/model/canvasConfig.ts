import { MarkerType } from '@xyflow/react'
import { CharacterNode } from '../ui/CharacterNode'
import { VariantNode } from '../ui/VariantNode'

export const nodeTypes = {
  character: CharacterNode,
  variant: VariantNode,
}

export const defaultEdgeOptions = {
  type: 'bezier',
  animated: false,
  style: { 
    strokeWidth: 2, 
    stroke: '#94a3b8',
    fill: 'none',
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: '#94a3b8',
  },
  pathOptions: {
    curvature: 0.25,
  },
}

export const minimapNodeColor = (node: { type?: string }) => 
  node.type === 'character' ? '#6366f1' : '#8b5cf6'

