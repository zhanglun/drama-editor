import { useCallback } from 'react'
import { useCanvasStore } from './store'
import type { CharacterNodeData, VariantNodeData, CreateVariantRequest } from '../../../shared/types'
import { createVariant, deleteVariant, updateVariant } from '../api'
import type { Node } from '@xyflow/react'

type CanvasNode = Node<CharacterNodeData> | Node<VariantNodeData>

export function useNodeOperations(scriptId: string | null) {
  const { addNode, removeNode, updateNodeData, addEdge, removeEdge, setNodes } = useCanvasStore()

  const addCharacterNode = useCallback(
    (characterId: string, name: string, avatarUrl: string | null, color: string) => {
      const node: Node<CharacterNodeData> = {
        id: characterId,
        type: 'character',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: {
          type: 'character',
          characterId,
          name,
          avatarUrl,
          color,
          variantCount: 0,
        },
      }
      addNode(node)
    },
    [addNode],
  )

  const addVariantNode = useCallback(
    async (data: CreateVariantRequest) => {
      if (!scriptId) return

      const res = await createVariant(scriptId, data)
      if (res.error || !res.data) throw new Error(res.error || 'Failed to create variant')

      const variant = res.data
      const node: Node<VariantNodeData> = {
        id: variant.id,
        type: 'variant',
        position: data.canvas_position || { x: Math.random() * 400, y: Math.random() * 400 },
        data: {
          type: 'variant',
          variantId: variant.id,
          characterId: variant.character_id,
          name: variant.name,
          imageUrl: variant.image_url,
          color: variant.color,
          traits: variant.traits,
          sceneCount: 0,
          parentVariantId: variant.parent_variant_id,
        },
      }
      addNode(node)

      const sourceId = variant.parent_variant_id || variant.character_id
      addEdge({
        id: `edge-${variant.id}-${sourceId}`,
        source: sourceId,
        target: variant.id,
        type: 'smoothstep',
      })

      setNodes((nodes) =>
        nodes.map((n) =>
          n.id === variant.character_id
            ? { ...n, data: { ...n.data, variantCount: (n.data as CharacterNodeData).variantCount + 1 } as CharacterNodeData }
            : n,
        ),
      )

      return variant
    },
    [scriptId, addNode, addEdge, setNodes],
  )

  const removeVariantNode = useCallback(
    async (variantId: string, cascade = false) => {
      if (!scriptId) return

      const node = useCanvasStore.getState().nodes.find((n) => n.id === variantId)
      if (!node || node.type !== 'variant') return

      const variantData = node.data as VariantNodeData

      const res = await deleteVariant(scriptId, variantId, cascade)
      if (res.error) throw new Error(res.error)

      removeNode(variantId)

      const parentEdgeId = `edge-${variantId}-${variantData.parentVariantId || variantData.characterId}`
      removeEdge(parentEdgeId)

      setNodes((nodes) =>
        nodes.map((n) =>
          n.id === variantData.characterId
            ? { ...n, data: { ...n.data, variantCount: Math.max(0, (n.data as CharacterNodeData).variantCount - 1) } as CharacterNodeData }
            : n,
        ),
      )
    },
    [scriptId, removeNode, removeEdge, setNodes],
  )

  const updateVariantNode = useCallback(
    async (variantId: string, data: { name?: string; description?: string; image_url?: string; color?: string; traits?: Record<string, unknown> }) => {
      if (!scriptId) return

      const res = await updateVariant(scriptId, variantId, data)
      if (res.error) throw new Error(res.error)

      const updateData: Partial<VariantNodeData> = {}
      if (data.name !== undefined) updateData.name = data.name
      if (data.image_url !== undefined) updateData.imageUrl = data.image_url
      if (data.color !== undefined) updateData.color = data.color
      if (data.traits !== undefined) updateData.traits = data.traits

      updateNodeData(variantId, updateData)
    },
    [scriptId, updateNodeData],
  )

  const updateNodePosition = useCallback(
    (nodeId: string, position: { x: number; y: number }) => {
      setNodes((nodes) =>
        nodes.map((n) => (n.id === nodeId ? { ...n, position } : n)),
      )
    },
    [setNodes],
  )

  return {
    addCharacterNode,
    addVariantNode,
    removeVariantNode,
    updateVariantNode,
    updateNodePosition,
  }
}
