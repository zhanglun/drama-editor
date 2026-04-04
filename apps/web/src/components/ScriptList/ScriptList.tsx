import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScriptStore } from '../../stores/scriptStore'
import { ScriptCard } from './ScriptCard'
import { EmptyState } from './EmptyState'
import { CreateScriptModal } from './CreateScriptModal'

type SortBy = 'title' | 'updated_at' | 'created_at'
type SortOrder = 'asc' | 'desc'

export function ScriptList() {
  const { scripts, isLoading, error, loadScripts, createScript } = useScriptStore()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortBy>('updated_at')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadScripts()
  }, [loadScripts])

  const filteredAndSortedScripts = useMemo(() => {
    let filtered = scripts

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = scripts.filter(script => {
        const titleMatch = script.title.toLowerCase().includes(query)
        const descriptionMatch = script.description?.toLowerCase().includes(query) || false

        let contentMatch = false
        if (script.content?.content) {
          const contentText = script.content.content
            .map(node => node.text || '')
            .join(' ')
            .toLowerCase()
          contentMatch = contentText.includes(query)
        }

        return titleMatch || descriptionMatch || contentMatch
      })
    }

    const sorted = [...filtered].sort((a, b) => {
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

    return sorted
  }, [scripts, sortBy, sortOrder, searchQuery])

  const handleSortChange = (newSortBy: SortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('desc')
    }
  }

  const handleCreateScript = async (title: string) => {
    const script = await createScript(title)
    navigate(`/scripts/${script.id}`)
  }

  const handleOpenScript = (scriptId: string) => {
    navigate(`/scripts/${scriptId}`)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent" />
          <p className="mt-2 text-sm text-gray-500">Loading scripts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Error loading scripts</h3>
          <p className="mt-1 text-sm text-gray-500">{error}</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => loadScripts()}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (scripts.length === 0) {
    return (
      <>
        <EmptyState onCreateScript={() => setIsModalOpen(true)} />
        <CreateScriptModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateScript}
        />
      </>
    )
  }

  if (filteredAndSortedScripts.length === 0 && searchQuery) {
    return (
      <>
        <div className="py-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Scripts</h1>
              <p className="mt-1 text-sm text-gray-500">{scripts.length} scripts</p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Script
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scripts..."
                className="block w-full rounded-md border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Clear search
              </button>
            </div>
          </div>
        </div>
        <CreateScriptModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateScript}
        />
      </>
    )
  }

  const SortIcon = ({ column }: { column: SortBy }) => {
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

  return (
    <>
      <div className="py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Scripts</h1>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery ? (
                <>
                  {filteredAndSortedScripts.length} of {scripts.length} script{scripts.length !== 1 ? 's' : ''}
                </>
              ) : (
                <>
                  {scripts.length} script{scripts.length !== 1 ? 's' : ''}
                </>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Script
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scripts by title or content..."
              className="block w-full rounded-md border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-gray-700">Sort by:</span>
          <button
            onClick={() => handleSortChange('title')}
            className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              sortBy === 'title'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Title
            <SortIcon column="title" />
          </button>
          <button
            onClick={() => handleSortChange('updated_at')}
            className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              sortBy === 'updated_at'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Modified
            <SortIcon column="updated_at" />
          </button>
          <button
            onClick={() => handleSortChange('created_at')}
            className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              sortBy === 'created_at'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Created
            <SortIcon column="created_at" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedScripts.map((script) => (
            <ScriptCard
              key={script.id}
              script={script}
              onClick={() => handleOpenScript(script.id)}
            />
          ))}
        </div>
      </div>
      <CreateScriptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateScript}
      />
    </>
  )
}
