import * as Diff from 'diff'

export type DiffType = 'added' | 'removed' | 'unchanged'

export interface DiffLine {
  value: string
  type: DiffType
  lineNumber?: {
    old?: number
    new?: number
  }
}

export type DiffMode = 'line' | 'word' | 'char'

export function computeDiff(
  oldText: string,
  newText: string,
  mode: DiffMode = 'line'
): DiffLine[] {
  let diffResult: Diff.Change[]

  switch (mode) {
    case 'line':
      diffResult = Diff.diffLines(oldText, newText)
      break
    case 'word':
      diffResult = Diff.diffWords(oldText, newText)
      break
    case 'char':
      diffResult = Diff.diffChars(oldText, newText)
      break
  }

  const lines: DiffLine[] = []
  let oldLineNumber = 1
  let newLineNumber = 1

  diffResult.forEach(part => {
    const type: DiffType = part.added ? 'added' : part.removed ? 'removed' : 'unchanged'
    const value = part.value

    if (mode === 'line') {
      const splitLines = value.split('\n')
      splitLines.forEach((line, index) => {
        if (index < splitLines.length - 1 || line) {
          const lineNumber: DiffLine['lineNumber'] = {}

          if (type !== 'added') {
            lineNumber.old = oldLineNumber++
          }
          if (type !== 'removed') {
            lineNumber.new = newLineNumber++
          }

          lines.push({
            value: line,
            type,
            lineNumber,
          })
        }
      })
    } else {
      lines.push({
        value,
        type,
      })
    }
  })

  return lines
}

export function countDiffs(lines: DiffLine[]): { added: number; removed: number } {
  return lines.reduce(
    (acc, line) => {
      if (line.type === 'added') acc.added++
      if (line.type === 'removed') acc.removed++
      return acc
    },
    { added: 0, removed: 0 }
  )
}

export function findDiffIndices(lines: DiffLine[]): number[] {
  return lines.reduce((acc, line, index) => {
    if (line.type !== 'unchanged') {
      acc.push(index)
    }
    return acc
  }, [] as number[])
}
