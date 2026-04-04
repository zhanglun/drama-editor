import { useState } from 'react'
import type { Script } from '../types'

interface ScriptMetadataPanelProps {
  script: Script
  onUpdate?: (metadata: Partial<Script>) => void
}

export function ScriptMetadataPanel({ script, onUpdate }: ScriptMetadataPanelProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [editedMetadata, setEditedMetadata] = useState({
    author: script.author || '',
    genre: script.genre || '',
    logline: script.logline || '',
    notes: script.notes || ''
  })

  const handleFieldChange = (field: keyof Script, value: string) => {
    setEditedMetadata(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    if (!onUpdate) return
    
    setIsSaving(true)
    try {
      await onUpdate(editedMetadata)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update metadata:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Script Details</h3>
        <p className="text-sm text-gray-500">
          Manage your script's metadata and information
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={editedMetadata.author}
            onChange={(e) => handleFieldChange('author', e.target.value)}
            placeholder="Enter author name..."
            className="block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            value={editedMetadata.genre}
            onChange={(e) => handleFieldChange('genre', e.target.value)}
            placeholder="e.g., Comedy, Drama, Thriller..."
            className="block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="logline" className="block text-sm font-medium text-gray-700 mb-1">
            Logline
          </label>
          <textarea
            id="logline"
            value={editedMetadata.logline}
            onChange={(e) => handleFieldChange('logline', e.target.value)}
            placeholder="A brief summary of your script..."
            rows={3}
            className="block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            value={editedMetadata.notes}
            onChange={(e) => handleFieldChange('notes', e.target.value)}
            placeholder="Additional notes about this script..."
            rows={4}
            className="block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={() => {
              setEditedMetadata({
                author: script.author || '',
                genre: script.genre || '',
                logline: script.logline || '',
                notes: script.notes || ''
              })
              setIsEditing(false)
            }}
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving || isEditing}
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving || isEditing ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}
