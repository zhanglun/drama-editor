import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  MiniMap,
  Controls,
  type OnNodeDrag,
  type NodeMouseHandler,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCanvasStore } from '../model/store'
import { useCanvasSync } from '../model/useCanvasSync'
import { CharacterNode } from './CharacterNode'
import { VariantNode } from './VariantNode'
import { CanvasToolbar } from './CanvasToolbar'
import { CanvasContextMenu } from './CanvasContextMenu'
import type { Node } from '@xyflow/react'

const nodeTypes = {
  character: CharacterNode,
  variant: VariantNode,
}

interface CanvasProps {
  scriptId: string | null
  onEditVariant?: (variantId: string) => void
  onAddVariant?: (parentId: string, parentType: 'character' | 'variant') => void
  onNodeSelect?: (nodeId: string | null, nodeType: 'character' | 'variant' | null) => void
}

interface ContextMenuState {
  x: number
  y: number
  nodeId: string | null
  nodeType: 'character' | 'variant' | null
}

export function Canvas({ scriptId, onEditVariant, onAddVariant, onNodeSelect }: CanvasProps) {
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
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id)
    onNodeSelect?.(node.id, node.type as 'character' | 'variant')
  }, [onNodeSelect])

  const handlePaneClick = useCallback(() => {
    setSelectedNodeId(null)
    setContextMenu(null)
    onNodeSelect?.(null, null)
  }, [onNodeSelect])

  const handleNodeContextMenu = useCallback((event: React.MouseEvent, node: Node) => {
    event.preventDefault()
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id,
      nodeType: node.type as 'character' | 'variant',
    })
  }, [])

  const handlePaneContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
    setContextMenu(null)
  }, [])

  const handleNodeDragStop = useCallback(
    (_: React.MouseEvent, node: Node) => {
      updateNodePosition(node.id, { canvas_position: { x: node.position.x, y: node.position.y } } as any)
    },
    [updateNodePosition],
  )

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      if (confirm('确定要删除该节点吗？')) {
        removeNode(nodeId)
      }
    },
    [removeNode],
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
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onNodeContextMenu={handleNodeContextMenu}
        onPaneContextMenu={handlePaneContextMenu}
        onNodeDragStop={handleNodeDragStop}
        nodeTypes={nodeTypes}
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
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  )
}
