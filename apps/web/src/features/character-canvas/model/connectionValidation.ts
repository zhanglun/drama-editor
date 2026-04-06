import type { Node, Edge } from '@xyflow/react'

export interface ValidationResult {
  valid: boolean
  reason?: string
}

function getDescendants(targetId: string, edges: Edge[]): Set<string> {
  const descendants = new Set<string>()
  const queue: string[] = [targetId]
  const visited = new Set<string>()

  while (queue.length > 0) {
    const currentId = queue.shift()!
    if (visited.has(currentId)) continue
    visited.add(currentId)

    for (const edge of edges) {
      if (edge.source === currentId && !descendants.has(edge.target)) {
        descendants.add(edge.target)
        queue.push(edge.target)
      }
    }
  }

  return descendants
}

export function validateConnection(
  sourceNode: Node,
  targetNode: Node,
  allEdges: Edge[],
): ValidationResult {
  if (targetNode.type !== 'variant') {
    return {
      valid: false,
      reason: '只能将连线指向变体节点',
    }
  }

  if (sourceNode.type !== 'character' && sourceNode.type !== 'variant') {
    return {
      valid: false,
      reason: '只能从角色或变体节点发起连线',
    }
  }

  if (sourceNode.id === targetNode.id) {
    return {
      valid: false,
      reason: '不能连接自身',
    }
  }

  const hasDuplicate = allEdges.some(
    (edge) => edge.source === sourceNode.id && edge.target === targetNode.id,
  )
  if (hasDuplicate) {
    return {
      valid: false,
      reason: '该连接已存在',
    }
  }

  const descendants = getDescendants(targetNode.id, allEdges)
  if (descendants.has(sourceNode.id)) {
    return {
      valid: false,
      reason: '不能形成循环连接',
    }
  }

  return { valid: true }
}
