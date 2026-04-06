import { useState } from 'react'
import {
  computeDiff,
  countDiffs,
  findDiffIndices,
  type DiffLine,
  type DiffMode,
} from '../lib'

export interface UseDiffOptions {
  oldText: string
  newText: string
  initialMode?: DiffMode
}

export interface UseDiffReturn {
  lines: DiffLine[]
  mode: DiffMode
  setMode: (mode: DiffMode) => void
  stats: { added: number; removed: number }
  currentDiffIndex: number
  nextDiff: () => void
  prevDiff: () => void
  diffIndices: number[]
}

export function useDiff({
  oldText,
  newText,
  initialMode = 'line',
}: UseDiffOptions): UseDiffReturn {
  const [mode, setMode] = useState<DiffMode>(initialMode)
  const [currentDiffIndex, setCurrentDiffIndex] = useState(0)

  const lines = computeDiff(oldText, newText, mode)
  const stats = countDiffs(lines)
  const diffIndices = findDiffIndices(lines)

  const nextDiff = () => {
    if (diffIndices.length === 0) return
    setCurrentDiffIndex(prev => (prev + 1) % diffIndices.length)
  }

  const prevDiff = () => {
    if (diffIndices.length === 0) return
    setCurrentDiffIndex(prev =>
      prev === 0 ? diffIndices.length - 1 : prev - 1
    )
  }

  return {
    lines,
    mode,
    setMode,
    stats,
    currentDiffIndex,
    nextDiff,
    prevDiff,
    diffIndices,
  }
}
