export interface SeedCharacter {
  name: string
  description: string
  avatar_url?: string | null
}

export interface SeedScript {
  title: string
  description: string | null
  author?: string
  genre?: string
  logline?: string
  notes?: string
  characters: SeedCharacter[]
  content: TipTapContent
}

export interface TipTapContent {
  type: 'doc'
  content: TipTapNode[]
}

export interface TipTapNode {
  type: string
  content?: TipTapNode[]
  text?: string
  attrs?: Record<string, unknown>
  marks?: Array<{
    type: string
    attrs?: Record<string, unknown>
  }>
}
