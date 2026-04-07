interface ScriptListHeaderProps {
  title?: string
  scriptCount: number
  filteredCount?: number
  hasSearchQuery?: boolean
  onCreateScript: () => void
}

export function ScriptListHeader({
  title = 'My Scripts',
  scriptCount,
  filteredCount,
  hasSearchQuery = false,
  onCreateScript,
}: ScriptListHeaderProps) {
  const displayCount = hasSearchQuery && filteredCount !== undefined
    ? `${filteredCount} of ${scriptCount} script${scriptCount !== 1 ? 's' : ''}`
    : `${scriptCount} script${scriptCount !== 1 ? 's' : ''}`

  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-1 text-sm text-gray-500">{displayCount}</p>
      </div>
      <button
        type="button"
        onClick={onCreateScript}
        className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        New Script
      </button>
    </div>
  )
}
