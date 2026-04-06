import { useCanvasStore } from './store'
import type { CharacterNodeData, VariantNodeData, CreateVariantRequest, CreateCharacterRequest } from '../../../shared/types'
import { createVariant, deleteVariant, updateVariant, createCharacter, updateCharacter } from '../api'
import type { Node } from '@xyflow/react'

type CanvasNode = Node<CharacterNodeData> | Node<VariantNodeData>

export function useNodeOperations(scriptId: string | null) {
  const { addNode, removeNode, updateNodeData, addEdge, removeEdge, setNodes } = useCanvasStore()

  const addCharacterNode = async (data: CreateCharacterRequest) => {
    if (!scriptId) return

    const res = await createCharacter(scriptId, data)
    if (res.error || !res.data) throw new Error(res.error || 'Failed to create character')

    const character = res.data
    const node: Node<CharacterNodeData> = {
      id: character.id,
      type: 'character',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        type: 'character',
        characterId: character.id,
        name: character.name,
        description: character.description || '',
        avatarUrl: character.avatar_url,
        color: character.color || '#6366f1',
        traits: character.traits || {},
        variantCount: 0,
      },
    }
    addNode(node)

    return character
  }

  const updateCharacterNode = async (
    characterId: string,
    data: { name?: string; description?: string; avatar_url?: string; color?: string; traits?: Record<string, unknown> },
  ) => {
    if (!scriptId) return

    const res = await updateCharacter(scriptId, characterId, data)
    if (res.error) throw new Error(res.error)

    const updateData: Partial<CharacterNodeData> = {}
    if (data.name !== undefined) updateData.name = data.name
    if (data.description !== undefined) updateData.description = data.description
    if (data.avatar_url !== undefined) updateData.avatarUrl = data.avatar_url
    if (data.color !== undefined) updateData.color = data.color
    if (data.traits !== undefined) updateData.traits = data.traits

    updateNodeData(characterId, updateData)
  }

  const addVariantNode = async (data: CreateVariantRequest) => {
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
      type: 'bezier',
    })

    setNodes((nodes) =>
      nodes.map((n) =>
        n.id === variant.character_id
          ? { ...n, data: { ...n.data, variantCount: (n.data as CharacterNodeData).variantCount + 1 } as CharacterNodeData }
          : n,
      ),
    )

    return variant
  }

  const removeVariantNode = async (variantId: string, cascade = false) => {
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
  }

  const updateVariantNode = async (variantId: string, data: { name?: string; description?: string; image_url?: string; color?: string; traits?: Record<string, unknown> }) => {
    if (!scriptId) return

    const res = await updateVariant(scriptId, variantId, data)
    if (res.error) throw new Error(res.error)

    const updateData: Partial<VariantNodeData> = {}
    if (data.name !== undefined) updateData.name = data.name
    if (data.image_url !== undefined) updateData.imageUrl = data.image_url
    if (data.color !== undefined) updateData.color = data.color
    if (data.traits !== undefined) updateData.traits = data.traits

    updateNodeData(variantId, updateData)
  }

  const updateNodePosition = (nodeId: string, position: { x: number; y: number }) => {
    setNodes((nodes) =>
      nodes.map((n) => (n.id === nodeId ? { ...n, position } : n)),
    )
  }

  return {
    addCharacterNode,
    updateCharacterNode,
    addVariantNode,
    removeVariantNode,
    updateVariantNode,
    updateNodePosition,
  }
}
