import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  MiniMap,
  Controls,
  ConnectionMode,
  MarkerType,
  type Connection,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCanvasStore } from '../model/store'
import { useCanvasSync } from '../model/useCanvasSync'
import { validateConnection } from '../model/connectionValidation'
import { CharacterNode } from './CharacterNode'
import { VariantNode } from './VariantNode'
import { CanvasToolbar } from './CanvasToolbar'
import { CanvasContextMenu } from './CanvasContextMenu'
import { HandleMenu } from './HandleMenu'
import type { Node } from '@xyflow/react'

const nodeTypes = {
  character: CharacterNode,
  variant: VariantNode,
}

const defaultEdgeOptions = {
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

interface CanvasProps {
  scriptId: string | null
  onEditVariant?: (variantId: string) => void
  onAddVariant?: (parentId: string, parentType: 'character' | 'variant') => void
  onNodeSelect?: (nodeId: string | null, nodeType: 'character' | 'variant' | null) => void
  onConnectVariant?: (sourceId: string, targetId: string, sourceType: 'character' | 'variant') => void
  onCreateCharacter?: () => void
}

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

function CanvasInner({
  scriptId,
  onEditVariant,
  onAddVariant,
  onNodeSelect,
  onConnectVariant,
  onCreateCharacter,
}: CanvasProps) {
  const nodes = useCanvasStore((s) => s.nodes)
  const edges = useCanvasStore((s) => s.edges)
  const loading = useCanvasStore((s) => s.loading)
  const error = useCanvasStore((s) => s.error)
  const onNodesChange = useCanvasStore((s) => s.onNodesChange)
  const onEdgesChange = useCanvasStore((s) => s.onEdgesChange)
  const removeNode = useCanvasStore((s) => s.removeNode)
  const updateNodePosition = useCanvasStore((s) => s.updateNodeData)

  const { forceSync } = useCanvasSync(scriptId)

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const [handleMenu, setHandleMenu] = useState<HandleMenuState | null>(null)
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const { screenToFlowPosition } = useReactFlow()

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

  const handleHandleInteraction = (
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
  }

  const handleMenuSelect = (action: string) => {
    if (action === 'create-variant' && handleMenu) {
      onAddVariant?.(handleMenu.nodeId, handleMenu.nodeType)
    }
    setHandleMenu(null)
  }

  const nodesWithCallbacks = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      onHandleInteraction: (interaction: any) =>
        handleHandleInteraction(node.id, node.type as 'character' | 'variant', interaction),
    },
  })) as any

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
          <p className="mt-2 text-sm text-gray-500">加载画布...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full relative" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodesWithCallbacks}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onNodeContextMenu={handleNodeContextMenu}
        onPaneContextMenu={handlePaneContextMenu}
        onNodeDragStop={handleNodeDragStop}
        onConnect={handleConnect}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={2}
        deleteKeyCode={null}
        className="bg-gray-50"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls showInteractive={false} />
        <MiniMap
          nodeStrokeColor="#e2e8f0"
          nodeColor={(node) => {
            if (node.type === 'character') return '#6366f1'
            return '#8b5cf6'
          }}
          maskColor="rgba(0,0,0,0.1)"
        />
      </ReactFlow>

      {selectedNodeId && (
        <CanvasToolbar
          nodeId={selectedNodeId}
          onEdit={() => onEditVariant?.(selectedNodeId)}
          onDelete={() => handleDeleteNode(selectedNodeId)}
          onAddChild={() => onAddVariant?.(selectedNodeId, 'variant')}
        />
      )}

      {contextMenu && (
        <CanvasContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          nodeId={contextMenu.nodeId}
          nodeType={contextMenu.nodeType}
          onEdit={() => {
            if (contextMenu.nodeId) onEditVariant?.(contextMenu.nodeId)
            setContextMenu(null)
          }}
          onDelete={() => {
            if (contextMenu.nodeId) handleDeleteNode(contextMenu.nodeId)
            setContextMenu(null)
          }}
          onAddChild={() => {
            if (contextMenu.nodeId) onAddVariant?.(contextMenu.nodeId, contextMenu.nodeType || 'variant')
            setContextMenu(null)
          }}
          onCreateCharacter={() => {
            onCreateCharacter?.()
            setContextMenu(null)
          }}
          onClose={() => setContextMenu(null)}
        />
      )}

      {handleMenu && (
        <HandleMenu
          x={handleMenu.x}
          y={handleMenu.y}
          nodeId={handleMenu.nodeId}
          nodeType={handleMenu.nodeType}
          mode={handleMenu.mode}
          onSelect={handleMenuSelect}
          onClose={() => setHandleMenu(null)}
        />
      )}
    </div>
  )
}

export function Canvas(props: CanvasProps) {
  return (
    <ReactFlowProvider>
      <CanvasInner {...props} />
    </ReactFlowProvider>
  )
}
