import { Download } from 'lucide-react'
import { Button } from '../../../shared/ui'
import type { ExportFormat } from '../model'

interface ExportButtonProps {
  onExport: () => void
  format?: ExportFormat
  disabled?: boolean
}

export function ExportButton({
  onExport,
  format = 'pdf',
  disabled = false,
}: ExportButtonProps) {
  const formatLabel = {
    pdf: 'PDF',
    docx: 'Word',
    txt: 'TXT',
  }

  return (
    <Button
      onClick={onExport}
      disabled={disabled}
      variant="outline"
      size="sm"
    >
      <Download className="w-4 h-4 mr-2" />
      导出 {formatLabel[format]}
    </Button>
  )
}
