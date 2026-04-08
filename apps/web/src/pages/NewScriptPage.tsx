import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScriptStore } from '../entities/script'
import { LoadingSpinner } from '../shared/ui/Loading/LoadingSpinner'

export function NewScriptPage() {
  const { createScript } = useScriptStore()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    setIsCreating(true)
    try {
      const script = await createScript(title.trim())
      navigate(`/scripts/${script.id}`)
    } catch (error) {
      console.error('Failed to create script:', error)
      setIsCreating(false)
    }
  }

  if (isCreating) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-2 text-sm text-gray-500">Creating script...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">新建剧本</h2>
        <p className="text-gray-600">为你的新剧本起个名字吧</p>
      </div>

      <form onSubmit={handleCreate} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            剧本标题
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="输入剧本标题..."
            className="block w-full rounded-md border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            autoFocus
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!title.trim()}
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            创建剧本
          </button>
          <button
            type="button"
            onClick={() => navigate('/scripts')}
            className="inline-flex items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  )
}
