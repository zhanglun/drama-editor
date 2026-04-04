import { cn } from '../../lib/utils'
import { CheckCircle2, Loader2,
  AlertCircle,
  FileEdit
} from 'lucide-react'

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error' | 'unsaved'

export interface SaveStatusIndicatorProps {
  status: SaveStatus
  lastSavedAt?: Date | null
  error?: Error | null
  className?: string
  showLastSaved?: boolean
}

export function SaveStatusIndicator({
  status,
  lastSavedAt,
  error,
  className,
  showLastSaved = true,
}: SaveStatusIndicatorProps) {
  const formatLastSaved = (date: Date): string => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHour = Math.floor(diffMin / 60)

    if (diffSec < 10) {
      return '刚刚'
    } else if (diffSec < 60) {
      return `${diffSec} 秒前`
    } else if (diffMin < 60) {
      return `${diffMin} 分钟前`
    } else if (diffHour < 24) {
        return `${diffHour} 小时前`
    } else {
      return date.toLocaleDateString('zh-CN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    }
  }

  const getStatusConfig = () => {
    switch (status) {
      case 'saving':
        return {
          icon: <Loader2 className="h-4 w-4 animate-spin text-blue-500" />,
          text: '保存中...',
          className: 'text-blue-600 bg-blue-50',
        }
      case 'saved':
        return {
          icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
          text: '已保存',
          className: 'text-green-600 bg-green-50',
        }
      case 'error':
        return {
          icon: <AlertCircle className="h-4 w-4 text-red-500" />,
          text: error?.message || '保存失败',
          className: 'text-red-600 bg-red-50',
        }
      case 'unsaved':
        return {
          icon: <FileEdit className="h-4 w-4 text-amber-500" />,
          text: '未保存的更改',
          className: 'text-amber-600 bg-amber-50',
        }
      case 'idle':
      default:
        return {
          icon: null,
          text: '',
          className: 'text-gray-500',
        }
    }
  }

  const config = getStatusConfig()

  if (status === 'idle' && !lastSavedAt) {
    return null
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all',
        config.className,
        className
      )}
    >
      {config.icon}
      <span>{config.text}</span>
      {showLastSaved && lastSavedAt && status === 'saved' && (
        <span className="text-gray-400 ml-1">
          · {formatLastSaved(lastSavedAt)}
        </span>
      )}
    </div>
  )
}
