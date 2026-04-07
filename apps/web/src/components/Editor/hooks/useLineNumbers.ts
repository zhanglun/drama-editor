import { useState, useEffect, useCallback, RefObject } from 'react'
import { Editor } from '@tiptap/core'

export type LineNumbersMode = 'line' | 'scene'

interface LineHeight {
  number: number
  type: 'line' | 'scene'
  pos: number
  height: number
}

interface UseLineNumbersProps {
  editor: Editor | null
  editorContainerRef: RefObject<HTMLDivElement>
  lineNumbersRef: RefObject<HTMLDivElement>
  lineNumbersMode: LineNumbersMode
}

interface UseLineNumbersReturn {
  lineHeights: LineHeight[]
  handleLineNumberClick: (pos: number) => void
}

export function useLineNumbers({
  editor,
  editorContainerRef,
  lineNumbersRef,
  lineNumbersMode,
}: UseLineNumbersProps): UseLineNumbersReturn {
  const [lineHeights, setLineHeights] = useState<LineHeight[]>([])

  const calculateLineHeights = useCallback(() => {
    if (!editor || !editorContainerRef.current) return

    const editorEl = editorContainerRef.current.querySelector('.ProseMirror') as HTMLElement
    if (!editorEl) return

    const nodes = editorEl.querySelectorAll('p, div[data-type="scene"], div[data-type="dialogue"], div[data-type="action"], div[data-type="transition"]')
    
    const newLineHeights: LineHeight[] = []
    const doc = editor.state.doc
    let lineNumber = 1
    let sceneNumber = 0
    let nodeIndex = 0
    
    doc.descendants((node, pos) => {
      if (node.type.name === 'scene') {
        sceneNumber++
        const domNode = nodes[nodeIndex] as HTMLElement
        const height = domNode ? domNode.getBoundingClientRect().height : 28
        newLineHeights.push({ number: sceneNumber, type: 'scene', pos, height })
        nodeIndex++
      } else if (node.type.name === 'paragraph' || 
                 node.type.name === 'dialogue' || 
                 node.type.name === 'action' || 
                 node.type.name === 'transition') {
        if (lineNumbersMode === 'line') {
          const domNode = nodes[nodeIndex] as HTMLElement
          const height = domNode ? domNode.getBoundingClientRect().height : 28
          newLineHeights.push({ number: lineNumber, type: 'line', pos, height })
          lineNumber++
          nodeIndex++
        }
      }
    })
    
    setLineHeights(newLineHeights)
  }, [editor, lineNumbersMode, editorContainerRef])

  useEffect(() => {
    if (!editor) return
    calculateLineHeights()
  }, [editor, calculateLineHeights])

  useEffect(() => {
    if (!editor) return
    calculateLineHeights()
  }, [editor, lineNumbersMode, calculateLineHeights])

  useEffect(() => {
    if (!editor || !lineNumbersRef.current || !editorContainerRef.current) return

    const editorEl = editorContainerRef.current.querySelector('.ProseMirror') as HTMLElement
    if (!editorEl) return

    const handleScroll = () => {
      if (lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = editorEl.scrollTop
      }
    }

    editorEl.addEventListener('scroll', handleScroll)
    return () => editorEl.removeEventListener('scroll', handleScroll)
  }, [editor, editorContainerRef, lineNumbersRef])

  const handleLineNumberClick = (pos: number) => {
    if (!editor) return
    editor.commands.setTextSelection(pos)
    editor.commands.focus()
  }

  return {
    lineHeights,
    handleLineNumberClick,
  }
}
