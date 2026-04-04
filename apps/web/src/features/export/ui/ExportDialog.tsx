import * as Dialog from '@radix-ui/react-dialog'
import { FileText, File, FileCode } from 'lucide-react'
import { Button } from '../../../shared/ui'
import type { Script } from '../../../shared/types'
import { useExportState, type ExportFormat } from '../model'
import { exportToPDF, exportToDOCX, exportToTXT } from '../lib'

interface ExportDialogProps {
  script: Script
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExportDialog({ script, open, onOpenChange }: ExportDialogProps) {
  const { format, setFormat, isExporting, setExporting, setError } = useExportState()

  const handleExport = async () => {
    setExporting(true)
    setError(null)

    try {
      switch (format) {
        case 'pdf':
          await exportToPDF(script)
          break
        case 'docx':
          await exportToDOCX(script)
          break
        case 'txt':
          await exportToTXT(script)
          break
      }
      onOpenChange(false)
    } catch (error) {
      setError(error as Error)
    } finally {
      setExporting(false)
    }
  }

  const formats: { value: ExportFormat; label: string; icon: React.ReactNode }[] = [
    { value: 'pdf', label: 'PDF 文档', icon: <FileText className="w-5 h-5" /> },
    { value: 'docx', label: 'Word 文档', icon: <File className="w-5 h-5" /> },
    { value: 'txt', label: '纯文本', icon: <FileCode className="w-5 h-5" /> },
  ]

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96 shadow-xl">
          <Dialog.Title className="text-lg font-semibold mb-4">
            导出剧本
          </Dialog.Title>

          <div className="space-y-3 mb-6">
            {formats.map(({ value, label, icon }) => (
              <button
                key={value}
                onClick={() => setFormat(value)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  format === value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {icon}
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isExporting}
            >
              取消
            </Button>
            <Button onClick={handleExport} disabled={isExporting}>
              {isExporting ? '导出中...' : '导出'}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
