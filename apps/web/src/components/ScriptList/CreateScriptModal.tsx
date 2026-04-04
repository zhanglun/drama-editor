import { useState, useEffect, useRef } from 'react'

interface CreateScriptModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (title: string) => Promise<void>
}

export function CreateScriptModal({ isOpen, onClose, onCreate }: CreateScriptModalProps) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTitle('')
      setError('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmedTitle = title.trim()
    
    if (!trimmedTitle) {
      setError('Script title cannot be empty')
      return
    }
    
    if (trimmedTitle.length > 100) {
      setError('Script title must be less than 100 characters')
      return
    }
    
    setIsCreating(true)
    setError('')
    
    try {
      await onCreate(trimmedTitle)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create script')
    } finally {
      setIsCreating(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onKeyDown={handleKeyDown}>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  Create New Script
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Enter a title for your new script
                </p>
              </div>
              
              <div>
                <label htmlFor="title" className="sr-only">
                  Script title
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                    setError('')
                  }}
                  placeholder="My New Script"
                  className={`block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    error ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-indigo-600'
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  disabled={isCreating}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600" id="title-error">
                    {error}
                  </p>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                disabled={isCreating}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto"
              >
                {isCreating ? (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Create Script'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isCreating}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
