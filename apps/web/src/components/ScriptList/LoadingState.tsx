import { LoadingSpinner } from '../../shared/ui/Loading/LoadingSpinner'

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message = 'Loading scripts...' }: LoadingStateProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-2 text-sm text-gray-500">{message}</p>
      </div>
    </div>
  )
}
