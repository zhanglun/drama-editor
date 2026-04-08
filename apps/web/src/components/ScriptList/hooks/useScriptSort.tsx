import { useState, useMemo } from 'react'
import type { Script } from '../../../shared/types'

export type SortBy = 'title' | 'updated_at' | 'created_at'
export type SortOrder = 'asc' | 'desc'

export function useScriptSort(scripts: Script[]) {
  const [sortBy, setSortBy] = useState<SortBy>('updated_at')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const handleSortChange = (newSortBy: SortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('desc')
    }
  }

  const sortedScripts = useMemo(() => {
    return [...scripts].sort((a, b) => {
      let comparison = 0

      if (sortBy === 'title') {
        comparison = a.title.localeCompare(b.title)
      } else if (sortBy === 'updated_at') {
        comparison = new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
      } else if (sortBy === 'created_at') {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      }

      return sortOrder === 'asc' ? comparison : -comparison
    })
  }, [scripts, sortBy, sortOrder])

  return {
    sortBy,
    sortOrder,
    handleSortChange,
    sortedScripts,
  }
}

export function SortIcon({ column, sortBy, sortOrder }: { column: SortBy; sortBy: SortBy; sortOrder: SortOrder }) {
  if (sortBy !== column) {
    return (
      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    )
  }

  return sortOrder === 'asc' ? (
    <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  ) : (
    <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}
