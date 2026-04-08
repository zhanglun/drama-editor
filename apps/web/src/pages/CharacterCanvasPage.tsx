import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useScriptStore } from '../entities/script'
import { useCanvasStore } from '../features/character-canvas/model/store'
import { useNodeOperations } from '../features/character-canvas/model/useNodeOperations'
import { Canvas } from '../features/character-canvas/ui/Canvas'
import { VariantDetailPanel } from '../features/character-canvas/ui/VariantDetailPanel'
import { CharacterDetailPanel } from '../features/character-canvas/ui/CharacterDetailPanel'
import { CreateCharacterDialog } from '../features/character-canvas/ui/CreateCharacterDialog'
import { CreateVariantDialog } from '../features/character-canvas/ui/CreateVariantDialog'
import type { VariantNodeData } from '../shared/types'
import { updateVariant } from '../features/character-canvas/api'
import { useDialog } from '../shared/hooks/useDialog'
import { useCharacters } from './hooks/useCharacters'
import { LoadingState, ErrorState, NotFoundState } from './components/PageStates'
import { PageHeader } from './components/PageHeader'
import { EmptyDetailState } from './components/EmptyDetailState'

export function CharacterCanvasPage() {
  const { id } = useParams<{ id: string }>()
  const { currentScript, loadScript, isLoading, error } = useScriptStore()
  const loadFromServer = useCanvasStore((s) => s.loadFromServer)
  const reset = useCanvasStore((s) => s.reset)
  const { addCharacterNode, addVariantNode } = useNodeOperations(id || null)
  
  const { characters, isLoading: isLoadingCharacters, error: charactersError } = useCharacters(id, !!currentScript)
  
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [selectedNodeType, setSelectedNodeType] = useState<'character' | 'variant' | null>(null)
  const createCharDialog = useDialog()
  const createVariantDialog = useDialog()
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
    if (!id || characters.length === 0 || isLoadingCharacters) return

    loadFromServer(id, characters)
  }, [id, characters, isLoadingCharacters, loadFromServer])

  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const handleCreateCharacter = async (data: { name: string; description?: string; avatar_url?: string; color?: string }) => {
    const result = await addCharacterNode(data)
    if (result) {
      createCharDialog.close()
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

    const parentName = (parentNode.data as unknown as Record<string, unknown>).name as string
    const characterId = parentType === 'character' 
      ? parentId 
      : (parentNode.data as VariantNodeData).characterId

    setCreateVariantParent({
      id: parentId,
      type: parentType,
      name: parentName,
      characterId,
    })
    createVariantDialog.open()
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
      createVariantDialog.close()
      setCreateVariantParent(null)
    }
  }

  if (isLoading || isLoadingCharacters) {
    return <LoadingState />
  }

  if (error || charactersError) {
    return <ErrorState error={error || charactersError || ''} />
  }

  if (!currentScript) {
    return <NotFoundState />
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <PageHeader
        scriptId={id}
        title={currentScript.title}
        onCreateCharacter={() => createCharDialog.open()}
      />

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1">
          <Canvas
            scriptId={id || null}
            onNodeSelect={handleNodeSelect}
            onConnectVariant={handleConnectVariant}
            onAddVariant={handleAddVariant}
            onCreateCharacter={() => createCharDialog.open()}
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
            <EmptyDetailState />
          )}
        </div>
      </div>

      <CreateCharacterDialog
        open={createCharDialog.isOpen}
        onClose={() => createCharDialog.close()}
        onSubmit={handleCreateCharacter}
      />

      {createVariantParent && (
        <CreateVariantDialog
          open={createVariantDialog.isOpen}
          onClose={() => {
            createVariantDialog.close()
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
