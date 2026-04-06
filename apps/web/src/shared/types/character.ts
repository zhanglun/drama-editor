export interface Character {
  id: string
  script_id: string
  name: string
  description: string | null
  avatar_url: string | null
  created_at: string
  traits?: Record<string, unknown> | null
  color?: string | null
  canvas_position?: { x: number; y: number } | null
}

export interface CharacterVariant {
  id: string
  character_id: string
  parent_variant_id: string | null
  name: string
  description: string
  image_url: string
  traits: Record<string, unknown>
  color: string
  canvas_position: { x: number; y: number }
  created_at: string
  updated_at: string
}

export interface VariantScene {
  variant_id: string
  scene_id: string
  created_at: string
}

export interface CreateVariantRequest {
  character_id: string
  name: string
  description?: string
  image_url?: string
  parent_variant_id?: string | null
  traits?: Record<string, unknown>
  color?: string
  canvas_position?: { x: number; y: number }
}

export interface UpdateVariantRequest {
  name?: string
  description?: string
  image_url?: string
  traits?: Record<string, unknown>
  color?: string
  canvas_position?: { x: number; y: number }
}

export interface VariantResponse extends CharacterVariant {
  scene_ids?: string[]
  child_count?: number
}

export interface CharacterNodeData {
  type: 'character'
  characterId: string
  name: string
  avatarUrl: string | null
  color: string
  variantCount: number
}

export interface VariantNodeData {
  type: 'variant'
  variantId: string
  characterId: string
  name: string
  imageUrl: string
  color: string
  traits: Record<string, unknown>
  sceneCount: number
  parentVariantId: string | null
}

export interface CanvasNode {
  id: string
  type: 'character' | 'variant'
  position: { x: number; y: number }
}

export interface CanvasViewport {
  x: number
  y: number
  zoom: number
}

export interface CanvasState {
  nodes: CanvasNode[]
  viewport: CanvasViewport
}

export interface LinkSceneRequest {
  scene_ids: string[]
}
