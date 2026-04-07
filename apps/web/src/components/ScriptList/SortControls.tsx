import { SortIcon } from './hooks'
import type { SortBy, SortOrder } from './hooks'

interface SortControlsProps {
  sortBy: SortBy
  sortOrder: SortOrder
  onSortChange: (sortBy: SortBy) => void
}

export function SortControls({ sortBy, sortOrder, onSortChange }: SortControlsProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="text-sm text-gray-700">Sort by:</span>
      <button
        onClick={() => onSortChange('title')}
        className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          sortBy === 'title'
            ? 'bg-indigo-100 text-indigo-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Title
        <SortIcon column="title" sortBy={sortBy} sortOrder={sortOrder} />
      </button>
      <button
        onClick={() => onSortChange('updated_at')}
        className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          sortBy === 'updated_at'
            ? 'bg-indigo-100 text-indigo-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Modified
        <SortIcon column="updated_at" sortBy={sortBy} sortOrder={sortOrder} />
      </button>
      <button
        onClick={() => onSortChange('created_at')}
        className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          sortBy === 'created_at'
            ? 'bg-indigo-100 text-indigo-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Created
        <SortIcon column="created_at" sortBy={sortBy} sortOrder={sortOrder} />
      </button>
    </div>
  )
}
