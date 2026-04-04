import type { Script } from '../../../shared/types'

interface ScriptCardProps {
  script: Script
  onClick: () => void
}

export function ScriptCard({ script, onClick }: ScriptCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return 'Today'
    } else if (diffDays === 1) {
      return 'Yesterday'
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString('zh-CN', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      })
    }
  }

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

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-indigo-600">
            {script.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Modified {formatDate(script.updated_at)}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <svg
            className="h-5 w-5 text-gray-400 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
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
  )
}
