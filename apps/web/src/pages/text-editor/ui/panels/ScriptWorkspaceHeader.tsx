import { FileText, Import, Timer, Type } from 'lucide-react'
import { useRef } from 'react'
import type { ScriptStats } from '../../model'

interface ScriptWorkspaceHeaderProps {
  fileName: string
  episodeCount: number
  stats: ScriptStats
  onImport: (file: File) => Promise<void>
}

export function ScriptWorkspaceHeader({
  fileName,
  episodeCount,
  stats,
  onImport,
}: ScriptWorkspaceHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="border-b border-white/8 bg-[#171314] px-5 py-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#9a9196]">
            <FileText className="h-3.5 w-3.5" />
            文本工作区
          </div>
          <div className="mt-2 text-lg font-semibold text-white">
            {fileName || '未命名剧本'}
          </div>
          <div className="mt-1 text-sm text-[#91878c]">
            当前目录共 {episodeCount} 集，右侧支持完整剧本编辑与预览定位。
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-[#47343c] bg-[#261c21] px-3 py-2 text-sm font-medium text-[#ffe2ec] transition hover:bg-[#2d2027]"
          >
            <Import className="h-4 w-4" />
            导入剧本
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.docx"
            className="hidden"
            onChange={async (event) => {
              const file = event.target.files?.[0]
              if (!file) return

              await onImport(file)
              event.target.value = ''
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#cfc7cb]">
        <div className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <span className="text-[#8f878b]">字数</span>
          <span className="ml-2 font-medium text-white">{stats.wordCount}</span>
        </div>
        <div className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <Type className="mr-1 inline h-3.5 w-3.5 text-[#8f878b]" />
          <span className="text-[#8f878b]">去空格字符</span>
          <span className="ml-2 font-medium text-white">{stats.charCountNoSpace}</span>
        </div>
        <div className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <Timer className="mr-1 inline h-3.5 w-3.5 text-[#8f878b]" />
          <span className="text-[#8f878b]">阅读时间</span>
          <span className="ml-2 font-medium text-white">{stats.readingTime}</span>
        </div>
      </div>
    </div>
  )
}
