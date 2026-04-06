import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const cardVariants = cva(
  'rounded-lg border border-gray-200 bg-white shadow-sm',
  {
    variants: {
      variant: {
        default: '',
        interactive: 'transition-all hover:border-indigo-300 hover:shadow-md cursor-pointer',
      },
      size: {
        default: 'p-6',
        compact: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card, cardVariants }
