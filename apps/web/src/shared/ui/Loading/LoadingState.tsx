import * as React from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { cn } from '../../lib/utils'

export interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
}

const LoadingState = React.forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, message, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center min-h-[200px] p-8',
          className
        )}
        ref={ref}
        {...props}
      >
        <LoadingSpinner />
        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    )
  }
)
LoadingState.displayName = 'LoadingState'

export { LoadingState }
