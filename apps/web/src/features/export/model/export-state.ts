import { create } from 'zustand'

export type ExportFormat = 'pdf' | 'docx' | 'txt'

interface ExportState {
  isExporting: boolean
  format: ExportFormat
  error: Error | null
  setFormat: (format: ExportFormat) => void
  setExporting: (isExporting: boolean) => void
  setError: (error: Error | null) => void
}

export const useExportState = create<ExportState>(set => ({
  isExporting: false,
  format: 'pdf',
  error: null,
  setFormat: format => set({ format }),
  setExporting: isExporting => set({ isExporting }),
  setError: error => set({ error }),
}))
