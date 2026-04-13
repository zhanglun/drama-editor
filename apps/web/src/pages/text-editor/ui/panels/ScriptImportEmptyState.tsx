import { FileUp, Sparkles, Type } from 'lucide-react'
import { useRef } from 'react'

interface ScriptImportEmptyStateProps {
  onImport?: (file: File) => Promise<void>
  onStartWriting?: () => void
  allowDirectEditing?: boolean
}

export function ScriptImportEmptyState({
  onImport,
  onStartWriting,
  allowDirectEditing = false,
}: ScriptImportEmptyStateProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[#4a3740] bg-[radial-gradient(circle_at_top,#2b1d24,transparent_55%),#151312] px-6 py-10">
      <div className="w-full max-w-xl rounded-2xl border border-[#3a2a31] bg-[#1b1517]/95 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4f3641] bg-[#261c20] px-3 py-1 text-xs text-[#f5b4cc]">
          <Sparkles className="h-3.5 w-3.5" />
          剧本正文入口
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-white">先把剧本内容放进来，再继续编辑和预览</h3>
        <p className="mt-3 text-sm leading-6 text-[#a99ea3]">
          这里预留的是和业务强相关的导入入口。当前先用一个占位实现承接交互，后续可以替换成更完整的上传、模板或 AI 生成流程。
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex min-h-[128px] flex-col items-start justify-between rounded-2xl border border-[#523844] bg-[#23191d] p-5 text-left transition hover:bg-[#2a1d23]"
          >
            <FileUp className="h-6 w-6 text-[#ff6ca8]" />
            <div>
              <div className="text-base font-medium text-white">导入剧本文件</div>
              <div className="mt-2 text-sm leading-6 text-[#b1a6ab]">支持 `txt`、`docx`，导入后立即进入完整剧本编辑。</div>
            </div>
          </button>

          <div className="rounded-2xl border border-[#3e3036] bg-[#171214] p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Type className="h-4 w-4 text-[#ff89b8]" />
              业务能力预留
            </div>
            <p className="mt-3 text-sm leading-6 text-[#9f9499]">
              这里可以继续接入模板创建、AI 生成、最近草稿恢复等业务入口。
            </p>
          </div>
        </div>

        {allowDirectEditing && (
          <button
            type="button"
            onClick={onStartWriting}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#4a3841] px-4 py-2 text-sm font-medium text-[#f6d7e4] transition hover:bg-white/5"
          >
            直接开始编辑
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.docx"
          className="hidden"
          onChange={async (event) => {
            const file = event.target.files?.[0]
            if (!file || !onImport) return

            await onImport(file)
            event.target.value = ''
          }}
        />
      </div>
    </div>
  )
}
