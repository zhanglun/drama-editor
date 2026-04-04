import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from '../../../shared/ui'

interface DiffNavigationProps {
  currentDiff: number
  totalDiffs: number
  onNext: () => void
  onPrev: () => void
}

export function DiffNavigation({
  currentDiff,
  totalDiffs,
  onNext,
  onPrev,
}: DiffNavigationProps) {
  if (totalDiffs === 0) {
    return (
      <div className="text-sm text-gray-500">
        没有发现差异
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">
        差异 {currentDiff + 1} / {totalDiffs}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        disabled={totalDiffs === 0}
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={totalDiffs === 0}
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  )
}
