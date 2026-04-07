import { useCallback, useEffect, useRef, useState } from 'react'
import { useReactFlow, type Connection, type Node } from '@xyflow/react'
import { useCanvasStore } from './store'
import { validateConnection } from './connectionValidation'

interface ContextMenuState {
  x: number
  y: number
  nodeId: string | null
  nodeType: 'character' | 'variant' | null
}

interface HandleMenuState {
  x: number
  y: number
  nodeId: string
  nodeType: 'character' | 'variant'
  mode: 'click' | 'drag'
  canvasPosition: { x: number; y: number }
}

interface UseCanvasEventsParams {
  onNodeSelect?: (nodeId: string | null, nodeType: 'character' | 'variant' | null) => void
  onEditVariant?: (variantId: string) => void
  onAddVariant?: (parentId: string, parentType: 'character' | 'variant') => void
  onConnectVariant?: (sourceId: string, targetId: string, sourceType: 'character' | 'variant') => void
  onCreateCharacter?: () => void
}

export function useCanvasEvents({
  onNodeSelect,
  onEditVariant,
  onAddVariant,
  onConnectVariant,
  onCreateCharacter,
}: UseCanvasEventsParams) {
  const nodes = useCanvasStore((s) => s.nodes)
  const edges = useCanvasStore((s) => s.edges)
  const removeNode = useCanvasStore((s) => s.removeNode)
  const updateNodePosition = useCanvasStore((s) => s.updateNodeData)

  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const { screenToFlowPosition } = useReactFlow()

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const [handleMenu, setHandleMenu] = useState<HandleMenuState | null>(null)

  const handleNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id)
    onNodeSelect?.(node.id, node.type as 'character' | 'variant')
  }

  const handlePaneClick = () => {
    setSelectedNodeId(null)
    setContextMenu(null)
    onNodeSelect?.(null, null)
  }

  const handleNodeContextMenu = (event: React.MouseEvent, node: Node) => {
    event.preventDefault()
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id,
      nodeType: node.type as 'character' | 'variant',
    })
  }

  const handlePaneContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      nodeId: null,
      nodeType: null,
    })
  }

  const handleNodeDragStop = (_: React.MouseEvent, node: Node) => {
    // TODO: Phase 4 task 4.3 - fix type safety for node position update
    // canvas_position is not in CharacterNodeData/VariantNodeData but is stored in node data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateNodePosition(node.id, { canvas_position: { x: node.position.x, y: node.position.y } } as any)
  }

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      if (confirm('确定要删除该节点吗？')) {
        removeNode(nodeId)
      }
    },
    [removeNode],
  )

  const handleConnect = (connection: Connection) => {
    if (!connection.source || !connection.target) return

    const sourceNode = nodes.find((n) => n.id === connection.source)
    const targetNode = nodes.find((n) => n.id === connection.target)
    if (!sourceNode || !targetNode) return

    const validation = validateConnection(sourceNode, targetNode, edges)
    if (!validation.valid) {
      alert(validation.reason)
      return
    }

    const sourceName = (sourceNode.data as Record<string, unknown>).name as string
    const targetName = (targetNode.data as Record<string, unknown>).name as string
    if (!confirm(`确定将变体「${targetName}」移动到「${sourceName}」下方？`)) return

    onConnectVariant?.(connection.source, connection.target, sourceNode.type as 'character' | 'variant')
  }

  const handleHandleInteraction = useCallback(
    (
      nodeId: string,
      nodeType: 'character' | 'variant',
      interaction: { mode: 'click' | 'drag'; position: { x: number; y: number } }
    ) => {
      if (!reactFlowWrapper.current) return

      const bounds = reactFlowWrapper.current.getBoundingClientRect()
      const canvasPosition = screenToFlowPosition({
        x: interaction.position.x - bounds.left,
        y: interaction.position.y - bounds.top,
      })

      setHandleMenu({
        x: interaction.position.x,
        y: interaction.position.y,
        nodeId,
        nodeType,
        mode: interaction.mode,
        canvasPosition,
      })
    },
    [screenToFlowPosition],
  )

  const handleMenuSelect = useCallback(
    (action: string) => {
      if (action === 'create-variant' && handleMenu) {
        onAddVariant?.(handleMenu.nodeId, handleMenu.nodeType)
      }
      setHandleMenu(null)
    },
    [handleMenu, onAddVariant],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedNodeId) {
        handleDeleteNode(selectedNodeId)
      }
      if (e.key === 'Escape') {
        setSelectedNodeId(null)
        setContextMenu(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedNodeId, handleDeleteNode])

  const handleContextMenuEdit = useCallback(() => {
    if (contextMenu?.nodeId) onEditVariant?.(contextMenu.nodeId)
    setContextMenu(null)
  }, [contextMenu, onEditVariant])

  const handleContextMenuDelete = useCallback(() => {
    if (contextMenu?.nodeId) handleDeleteNode(contextMenu.nodeId)
    setContextMenu(null)
  }, [contextMenu, handleDeleteNode])

  const handleContextMenuAddChild = useCallback(() => {
    if (contextMenu?.nodeId) onAddVariant?.(contextMenu.nodeId, contextMenu.nodeType || 'variant')
    setContextMenu(null)
  }, [contextMenu, onAddVariant])

  const handleContextMenuCreateCharacter = useCallback(() => {
    onCreateCharacter?.()
    setContextMenu(null)
  }, [onCreateCharacter])

  const handleToolbarEdit = useCallback(() => {
    if (selectedNodeId) onEditVariant?.(selectedNodeId)
  }, [selectedNodeId, onEditVariant])

  const handleToolbarDelete = useCallback(() => {
    if (selectedNodeId) handleDeleteNode(selectedNodeId)
  }, [selectedNodeId, handleDeleteNode])

  const handleToolbarAddChild = useCallback(() => {
    if (selectedNodeId) onAddVariant?.(selectedNodeId, 'variant')
  }, [selectedNodeId, onAddVariant])

  return {
    selectedNodeId,
    contextMenu,
    handleMenu,
    reactFlowWrapper,
    handleNodeClick,
    handlePaneClick,
    handleNodeContextMenu,
    handlePaneContextMenu,
    handleNodeDragStop,
    handleDeleteNode,
    handleConnect,
    handleHandleInteraction,
    handleMenuSelect,
    setContextMenu,
    setHandleMenu,
    handleContextMenuEdit,
    handleContextMenuDelete,
    handleContextMenuAddChild,
    handleContextMenuCreateCharacter,
    handleToolbarEdit,
    handleToolbarDelete,
    handleToolbarAddChild,
  }
}
