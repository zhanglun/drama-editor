import * as React from 'react'
import { cn } from '../../lib/utils'

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg'
  color?: string
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = 'default', color = 'text-indigo-600', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      default: 'h-8 w-8',
      lg: 'h-12 w-12',
    }

    return (
      <div
        className={cn(
          'animate-spin rounded-full border-b-2',
          sizeClasses[size],
          color,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
LoadingSpinner.displayName = 'LoadingSpinner'

export { LoadingSpinner }
