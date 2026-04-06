import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
} from '@xyflow/react'
import type {
  Character,
  CharacterNodeData,
  VariantNodeData,
  VariantResponse,
  CanvasState,
} from '../../../shared/types'
import { listVariants, getCanvasState, saveCanvasState } from '../api'

type CanvasNode = Node<CharacterNodeData> | Node<VariantNodeData>

interface CanvasStore {
  scriptId: string | null
  nodes: CanvasNode[]
  edges: Edge[]
  loading: boolean
  error: string | null
  isDirty: boolean
  isSaving: boolean

  loadFromServer: (scriptId: string, characters: Character[]) => Promise<void>
  reset: () => void

  onNodesChange: (changes: NodeChange<CanvasNode>[]) => void
  onEdgesChange: (changes: EdgeChange[]) => void
  setNodes: (nodes: CanvasNode[] | ((prev: CanvasNode[]) => CanvasNode[])) => void
  setEdges: (edges: Edge[] | ((prev: Edge[]) => Edge[])) => void
  addNode: (node: CanvasNode) => void
  updateNodeData: (id: string, data: Partial<CharacterNodeData | VariantNodeData>) => void
  removeNode: (id: string) => void
  addEdge: (edge: Edge) => void
  removeEdge: (id: string) => void
  syncToServer: () => Promise<void>
}

const initialState = {
  scriptId: null as string | null,
  nodes: [] as CanvasNode[],
  edges: [] as Edge[],
  loading: false,
  error: null as string | null,
  isDirty: false,
  isSaving: false,
}

function buildCanvasNodes(
  characters: Character[],
  variants: VariantResponse[],
  savedPositions: Map<string, { x: number; y: number }>,
): { nodes: CanvasNode[]; edges: Edge[] } {
  const nodes: CanvasNode[] = []
  const edges: Edge[] = []

  const variantCountMap = new Map<string, number>()
  for (const v of variants) {
    const count = (variantCountMap.get(v.character_id) || 0) + 1
    variantCountMap.set(v.character_id, count)
  }

  for (const char of characters) {
    const pos = savedPositions.get(char.id) || char.canvas_position || { x: 0, y: 0 }
    nodes.push({
      id: char.id,
      type: 'character',
      position: pos,
      data: {
        type: 'character',
        characterId: char.id,
        name: char.name,
        description: char.description || '',
        avatarUrl: char.avatar_url,
        color: char.color || '#6366f1',
        traits: char.traits || {},
        variantCount: variantCountMap.get(char.id) || 0,
      },
    })
  }

  for (const v of variants) {
    const pos = savedPositions.get(v.id) || v.canvas_position || { x: 0, y: 0 }
    nodes.push({
      id: v.id,
      type: 'variant',
      position: pos,
      data: {
        type: 'variant',
        variantId: v.id,
        characterId: v.character_id,
        name: v.name,
        imageUrl: v.image_url,
        color: v.color,
        traits: v.traits,
        sceneCount: v.scene_ids?.length || 0,
        parentVariantId: v.parent_variant_id,
      },
    })

    if (v.parent_variant_id) {
      edges.push({
        id: `edge-${v.id}-parent`,
        source: v.parent_variant_id,
        target: v.id,
        type: 'bezier',
      })
    } else {
      edges.push({
        id: `edge-${v.id}-char`,
        source: v.character_id,
        target: v.id,
        type: 'bezier',
      })
    }
  }

  return { nodes, edges }
}

export const useCanvasStore = create<CanvasStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      loadFromServer: async (scriptId: string, characters: Character[]) => {
        set({ loading: true, error: null })
        try {
          const [variantsRes, canvasRes] = await Promise.all([
            listVariants(scriptId),
            getCanvasState(scriptId),
          ])

          if (variantsRes.error) throw new Error(variantsRes.error)
          if (canvasRes.error) throw new Error(canvasRes.error)

          const variants = (variantsRes.data || []) as VariantResponse[]
          const canvasState = canvasRes.data as CanvasState | null

          const savedPositions = new Map<string, { x: number; y: number }>()
          if (canvasState?.nodes) {
            for (const n of canvasState.nodes) {
              savedPositions.set(n.id, n.position)
            }
          }

          const { nodes, edges } = buildCanvasNodes(characters, variants, savedPositions)
          set({
            scriptId,
            nodes,
            edges,
            loading: false,
            isDirty: false,
          })
        } catch (err) {
          set({ error: (err as Error).message, loading: false })
        }
      },

      reset: () => set(initialState),

      onNodesChange: (changes) => {
        set((state) => ({
          nodes: applyNodeChanges(changes, state.nodes),
          isDirty: true,
        }))
      },

      onEdgesChange: (changes) => {
        set((state) => ({
          edges: applyEdgeChanges(changes, state.edges),
          isDirty: true,
        }))
      },

      setNodes: (nodesOrFn) => {
        set((state) => ({
          nodes: typeof nodesOrFn === 'function' ? nodesOrFn(state.nodes) : nodesOrFn,
          isDirty: true,
        }))
      },

      setEdges: (edgesOrFn) => {
        set((state) => ({
          edges: typeof edgesOrFn === 'function' ? edgesOrFn(state.edges) : edgesOrFn,
          isDirty: true,
        }))
      },

      addNode: (node) => {
        set((state) => ({
          nodes: [...state.nodes, node],
          isDirty: true,
        }))
      },

      updateNodeData: (id, data) => {
        set((state) => ({
          nodes: state.nodes.map((n) =>
            n.id === id ? { ...n, data: { ...n.data, ...data } as CharacterNodeData & VariantNodeData } : n,
          ),
          isDirty: true,
        }))
      },

      removeNode: (id) => {
        set((state) => ({
          nodes: state.nodes.filter((n) => n.id !== id),
          edges: state.edges.filter((e) => e.source !== id && e.target !== id),
          isDirty: true,
        }))
      },

      addEdge: (edge) => {
        set((state) => ({
          edges: [...state.edges, edge],
          isDirty: true,
        }))
      },

      removeEdge: (id) => {
        set((state) => ({
          edges: state.edges.filter((e) => e.id !== id),
          isDirty: true,
        }))
      },

      syncToServer: async () => {
        const { scriptId, nodes, isSaving } = get()
        if (!scriptId || isSaving) return

        set({ isSaving: true })
        try {
          const canvasNodes = nodes.map((n) => ({
            id: n.id,
            type: n.type as 'character' | 'variant',
            position: { x: n.position.x, y: n.position.y },
          }))

          await saveCanvasState(scriptId, {
            nodes: canvasNodes,
            viewport: { x: 0, y: 0, zoom: 1 },
          })

          set({ isSaving: false, isDirty: false })
        } catch (err) {
          set({ isSaving: false, error: (err as Error).message })
        }
      },
    }),
    { name: 'canvas-store' },
  ),
)

export type { CanvasNode, CanvasStore }
