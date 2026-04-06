import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, LayoutGrid, Plus } from 'lucide-react'
import { useScriptStore } from '../stores/scriptStore'
import { useCanvasStore } from '../features/character-canvas/model/store'
import { useNodeOperations } from '../features/character-canvas/model/useNodeOperations'
import { Canvas } from '../features/character-canvas/ui/Canvas'
import { VariantDetailPanel } from '../features/character-canvas/ui/VariantDetailPanel'
import { CharacterDetailPanel } from '../features/character-canvas/ui/CharacterDetailPanel'
import { CreateCharacterDialog } from '../features/character-canvas/ui/CreateCharacterDialog'
import { CreateVariantDialog } from '../features/character-canvas/ui/CreateVariantDialog'
import type { Character } from '../shared/types/character'
import type { VariantNodeData } from '../shared/types'
import { updateVariant } from '../features/character-canvas/api'
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export function CharacterCanvasPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentScript, loadScript, isLoading, error } = useScriptStore()
  const loadFromServer = useCanvasStore((s) => s.loadFromServer)
  const reset = useCanvasStore((s) => s.reset)
  const { addCharacterNode, addVariantNode } = useNodeOperations(id || null)

  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false)
  const [charactersError, setCharactersError] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [selectedNodeType, setSelectedNodeType] = useState<'character' | 'variant' | null>(null)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showCreateVariantDialog, setShowCreateVariantDialog] = useState(false)
  const [createVariantParent, setCreateVariantParent] = useState<{
    id: string
    type: 'character' | 'variant'
    name: string
    characterId: string
  } | null>(null)

  const handleNodeSelect = (nodeId: string | null, nodeType: 'character' | 'variant' | null) => {
    setSelectedNodeId(nodeId)
    setSelectedNodeType(nodeType)
  }

  useEffect(() => {
    if (id) {
      loadScript(id)
    }
  }, [id, loadScript])

  useEffect(() => {
    if (!id || !currentScript) return

    const fetchCharacters = async () => {
      setIsLoadingCharacters(true)
      setCharactersError(null)
      try {
        const response = await fetch(`${API_BASE}/scripts/${id}/characters`)
        if (!response.ok) throw new Error('Failed to load characters')
        const data = await response.json()
        setCharacters(data)
      } catch (err) {
        setCharactersError((err as Error).message)
      } finally {
        setIsLoadingCharacters(false)
      }
    }

    fetchCharacters()
  }, [id, currentScript])

  useEffect(() => {
    if (!id || characters.length === 0 || isLoadingCharacters) return

    loadFromServer(id, characters)
  }, [id, characters, isLoadingCharacters, loadFromServer])

  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const handleCreateCharacter = async (data: { name: string; description?: string; avatar_url?: string; color?: string }) => {
    try {
      const result = await addCharacterNode(data)
      if (result) {
        setShowCreateDialog(false)
      }
    } catch (err) {
      throw err
    }
  }

  const handleConnectVariant = async (sourceId: string, targetId: string, sourceType: 'character' | 'variant') => {
    if (!id) return

    const parentId = sourceType === 'character' ? null : sourceId

    const res = await updateVariant(id, targetId, {
      parent_variant_id: parentId,
    })

    if (res.error) {
      alert(res.error)
      return
    }

    const store = useCanvasStore.getState()
    const oldEdge = store.edges.find((e) => e.target === targetId)
    if (oldEdge) {
      store.removeEdge(oldEdge.id)
    }

    store.addEdge({
      id: `edge-${targetId}-${sourceId}`,
      source: sourceId,
      target: targetId,
      type: 'bezier',
    })

    store.updateNodeData(targetId, {
      parentVariantId: parentId,
    } as Partial<VariantNodeData>)
  }

  const handleAddVariant = (parentId: string, parentType: 'character' | 'variant') => {
    const store = useCanvasStore.getState()
    const parentNode = store.nodes.find((n) => n.id === parentId)
    if (!parentNode) return

    const parentName = (parentNode.data as Record<string, unknown>).name as string
    const characterId = parentType === 'character' 
      ? parentId 
      : (parentNode.data as VariantNodeData).characterId

    setCreateVariantParent({
      id: parentId,
      type: parentType,
      name: parentName,
      characterId,
    })
    setShowCreateVariantDialog(true)
  }

  const handleCreateVariant = async (data: { name: string; description?: string; image_url?: string; color?: string }) => {
    if (!id || !createVariantParent) return

    const store = useCanvasStore.getState()
    const parentNode = store.nodes.find((n) => n.id === createVariantParent.id)
    
    let canvasPosition = { x: 250, y: 100 }
    
    if (parentNode) {
      const childNodes = store.nodes.filter((n) => {
        if (n.type !== 'variant') return false
        const variantData = n.data as VariantNodeData
        const parentId = variantData.parentVariantId || variantData.characterId
        return parentId === createVariantParent.id
      })
      
      const offsetX = 250
      const offsetY = childNodes.length * 120
      
      canvasPosition = {
        x: parentNode.position.x + offsetX,
        y: parentNode.position.y + offsetY
      }
    }

    const result = await addVariantNode({
      character_id: createVariantParent.characterId,
      name: data.name,
      description: data.description,
      image_url: data.image_url,
      color: data.color,
      parent_variant_id: createVariantParent.type === 'variant' ? createVariantParent.id : undefined,
      canvas_position: canvasPosition,
    })

    if (result) {
      setShowCreateVariantDialog(false)
      setCreateVariantParent(null)
    }
  }

  if (isLoading || isLoadingCharacters) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
          <p className="mt-2 text-sm text-gray-500">加载画布...</p>
        </div>
      </div>
    )
  }

  if (error || charactersError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">加载失败</h3>
          <p className="mt-1 text-sm text-gray-500">{error || charactersError}</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => navigate('/scripts')}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              返回剧本列表
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentScript) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-sm text-gray-500">剧本未找到</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/scripts/${id}`)}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">{currentScript.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCreateDialog(true)}
              className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Plus className="h-4 w-4" />
              新角色
            </button>
            <div className="flex items-center gap-2 text-gray-500">
              <LayoutGrid className="h-4 w-4" />
              <span className="text-sm">形象画布</span>
            </div>
            <Link
              to={`/scripts/${id}`}
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              返回编辑器
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1">
          <Canvas
            scriptId={id || null}
            onNodeSelect={handleNodeSelect}
            onConnectVariant={handleConnectVariant}
            onAddVariant={handleAddVariant}
            onCreateCharacter={() => setShowCreateDialog(true)}
          />
        </div>

        <div className="w-80 border-l border-gray-200 bg-white overflow-hidden flex flex-col">
          {selectedNodeId && selectedNodeType === 'variant' ? (
            <VariantDetailPanel
              scriptId={id!}
              variantId={selectedNodeId}
              onClose={() => {
                setSelectedNodeId(null)
                setSelectedNodeType(null)
              }}
            />
          ) : selectedNodeId && selectedNodeType === 'character' ? (
            <CharacterDetailPanel
              scriptId={id!}
              characterId={selectedNodeId}
              onClose={() => {
                setSelectedNodeId(null)
                setSelectedNodeType(null)
              }}
            />
          ) : (
            <div className="p-6 flex-1 flex flex-col items-center justify-center">
              <div className="text-gray-400 mb-4">
                <LayoutGrid className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-sm text-gray-500">选择节点进行编辑</p>
              <p className="text-xs text-gray-400 mt-2">
                点击画布中的节点<br />查看详情并进行编辑
              </p>
            </div>
          )}
        </div>
      </div>

      <CreateCharacterDialog
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onSubmit={handleCreateCharacter}
      />

      {createVariantParent && (
        <CreateVariantDialog
          open={showCreateVariantDialog}
          onClose={() => {
            setShowCreateVariantDialog(false)
            setCreateVariantParent(null)
          }}
          onSubmit={handleCreateVariant}
          characterId={createVariantParent.characterId}
          parentVariantId={createVariantParent.type === 'variant' ? createVariantParent.id : null}
          parentName={createVariantParent.name}
        />
      )}
    </div>
  )
}
