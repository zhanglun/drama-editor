import { useEffect, useRef, useState } from 'react'
import { DiffLine } from './DiffLine'
import { DiffNavigation } from './DiffNavigation'
import { DiffModeSelector } from './DiffModeSelector'
import { useDiff } from '../model'
import { RotateCcw } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../../shared/ui/Dialog'
import { Button } from '../../../shared/ui/Button'

interface DiffViewerProps {
  oldText: string
  newText: string
  oldTitle?: string
  newTitle?: string
  onRestore?: () => void
}

export function DiffViewer({
  oldText,
  newText,
  oldTitle = '旧版本',
  newTitle = '新版本',
  onRestore,
}: DiffViewerProps) {
  const {
    lines,
    mode,
    setMode,
    stats,
    currentDiffIndex,
    nextDiff,
    prevDiff,
    diffIndices,
  } = useDiff({ oldText, newText })

  const currentLineRef = useRef<HTMLDivElement>(null)
  const [showRestoreDialog, setShowRestoreDialog] = useState(false)

  useEffect(() => {
    if (currentLineRef.current) {
      currentLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [currentDiffIndex])

  const handleRestore = () => {
    setShowRestoreDialog(true)
  }

  const confirmRestore = () => {
    setShowRestoreDialog(false)
    onRestore?.()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center gap-4">
          <DiffModeSelector mode={mode} onModeChange={setMode} />
          <DiffNavigation
            currentDiff={currentDiffIndex}
            totalDiffs={diffIndices.length}
            onNext={nextDiff}
            onPrev={prevDiff}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-4 text-sm">
            <span className="text-green-600">+{stats.added} 新增</span>
            <span className="text-red-600">-{stats.removed} 删除</span>
          </div>
          {onRestore && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRestore}
              className="flex items-center gap-1"
            >
              <RotateCcw className="h-4 w-4" />
              <span>恢复此版本</span>
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="border-b bg-gray-100 flex">
          <div className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border-r">
            {oldTitle}
          </div>
          <div className="flex-1 px-4 py-2 text-sm font-medium text-gray-700">
            {newTitle}
          </div>
        </div>

        <div className="divide-y">
          {lines.map((line, index) => {
            const isCurrentDiff =
              diffIndices[currentDiffIndex] === index
            return (
              <div key={`${line.type}-${line.lineNumber?.old ?? 'a'}-${line.lineNumber?.new ?? 'r'}`} ref={isCurrentDiff ? currentLineRef : undefined}>
                <DiffLine line={line} isActive={isCurrentDiff} />
              </div>
            )
          })}
        </div>
      </div>

      <Dialog open={showRestoreDialog} onOpenChange={setShowRestoreDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>恢复版本</DialogTitle>
            <DialogDescription>
              确定要恢复到此版本吗 当前未保存的内容将被替换。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRestoreDialog(false)}>
              取消
            </Button>
            <Button onClick={confirmRestore}>
              确认恢复
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
