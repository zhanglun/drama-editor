import { useState } from 'react'
import type { Script } from '../../shared/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../shared/ui'
import { useScriptStore } from '../../entities/script'
import { formatDate } from '../../shared/lib/utils'

interface ScriptCardProps {
  script: Script
  onClick: () => void
}

export function ScriptCard({ script, onClick }: ScriptCardProps) {
  const { deleteScript } = useScriptStore()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const getPreview = () => {
    if (!script.content?.content || script.content.content.length === 0) {
      return 'No content yet'
    }
    
    const firstNode = script.content.content[0]
    if (firstNode.type === 'text' && firstNode.text) {
      return firstNode.text.length > 100
        ? `${firstNode.text.substring(0, 100)}...`
        : firstNode.text
    }
    
    return 'Script content'
  }

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDeleteDialog(true)
  }

  const confirmDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteScript(script.id)
      setShowDeleteDialog(false)
    } catch (error) {
      console.error('Failed to delete script:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div
        onClick={onClick}
        className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-1">
              {script.title}
            </h3>
            <p className="text-xs text-gray-500">
              Last modified: {formatDate(script.updated_at)}
            </p>
          </div>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50 rounded transition-all disabled:opacity-50"
            title="Delete script"
          >
            <svg
              className="h-5 w-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 5v10m4-10z"
              />
            </svg>
          </button>
        </div>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {getPreview()}
        </p>
        
        {script.description && (
          <p className="mt-2 text-xs text-gray-500 line-clamp-1">
            {script.description}
          </p>
        )}
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={(open) => setShowDeleteDialog(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Script</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{script.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              disabled={isDeleting}
              className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
