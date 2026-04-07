import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScriptStore } from '../../stores/scriptStore'
import { ScriptCard } from './ScriptCard'
import { EmptyState } from './EmptyState'
import { CreateScriptModal } from './CreateScriptModal'
import { LoadingState } from './LoadingState'
import { ErrorState } from './ErrorState'
import { NoResultsState } from './NoResultsState'
import { SearchInput } from './SearchInput'
import { ScriptListHeader } from './ScriptListHeader'
import { SortControls } from './SortControls'
import { useScriptFilters, useScriptSort } from './hooks'

export function ScriptList() {
  const { scripts, isLoading, error, loadScripts, createScript } = useScriptStore()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    loadScripts()
  }, [loadScripts])

  const { searchQuery, setSearchQuery, filteredScripts } = useScriptFilters(scripts)
  const { sortBy, sortOrder, handleSortChange, sortedScripts } = useScriptSort(filteredScripts)

  const handleCreateScript = async (title: string) => {
    const script = await createScript(title)
    navigate(`/scripts/${script.id}`)
  }

  const handleOpenScript = (scriptId: string) => {
    navigate(`/scripts/${scriptId}`)
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState error={error} onRetry={loadScripts} />
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

  if (sortedScripts.length === 0 && searchQuery) {
    return (
      <>
        <div className="py-8">
          <ScriptListHeader
            scriptCount={scripts.length}
            onCreateScript={() => setIsModalOpen(true)}
          />
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <NoResultsState
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
        </div>
        <CreateScriptModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateScript}
        />
      </>
    )
  }

  return (
    <>
      <div className="py-8">
        <ScriptListHeader
          scriptCount={scripts.length}
          filteredCount={sortedScripts.length}
          hasSearchQuery={!!searchQuery}
          onCreateScript={() => setIsModalOpen(true)}
        />
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search scripts by title or content..."
        />
        <SortControls
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedScripts.map((script) => (
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
