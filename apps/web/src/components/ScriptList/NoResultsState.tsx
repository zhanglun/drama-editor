interface NoResultsStateProps {
  searchQuery: string
  onClearSearch: () => void
}

export function NoResultsState({ searchQuery, onClearSearch }: NoResultsStateProps) {
  return (
    <div className="text-center py-12">
      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
      <p className="mt-1 text-sm text-gray-500">
        No scripts match "{searchQuery}"
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={onClearSearch}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Clear search
        </button>
      </div>
    </div>
  )
}
