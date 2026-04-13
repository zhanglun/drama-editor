import { ScriptPreview } from '../primitives'

interface ScriptPreviewPanelProps {
  content: string
  revealLine?: number
}

export function ScriptPreviewPanel({ content, revealLine }: ScriptPreviewPanelProps) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-[#33282e] bg-[#1a1618]">
      <ScriptPreview
        content={content}
        className="h-full overflow-y-auto px-5 py-5"
        revealLine={revealLine}
      />
    </div>
  )
}
