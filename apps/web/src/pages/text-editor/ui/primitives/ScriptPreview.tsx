import { useEffect, useMemo, useRef } from 'react'
import type { Scene, ScriptBlock } from '../../model'
import { parseScript } from '../../model'

interface ScriptPreviewProps {
  content: string
  className?: string
  revealLine?: number
}

const SMOOTH_SCROLL_SCREEN_MULTIPLIER = 1.5

function scrollTargetIntoContainer(container: HTMLDivElement, target: HTMLElement) {
  const containerRect = container.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const targetTop = container.scrollTop + (targetRect.top - containerRect.top)
  const scrollDistance = Math.abs(container.scrollTop - targetTop)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior: ScrollBehavior =
    prefersReducedMotion || scrollDistance > container.clientHeight * SMOOTH_SCROLL_SCREEN_MULTIPLIER
      ? 'auto'
      : 'smooth'

  container.scrollTo({
    top: Math.max(targetTop, 0),
    behavior,
  })
}

function BlockRenderer({ block }: { block: ScriptBlock }) {
  if (block.type === 'episodeHeader') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-fuchsia-400 bg-fuchsia-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-fuchsia-100 px-2 py-0.5 text-xs font-medium text-fuchsia-700">
          集头
        </span>
        <span className="flex-1 text-sm font-medium text-fuchsia-800">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'sectionHeader') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-cyan-400 bg-cyan-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-cyan-100 px-2 py-0.5 text-xs font-medium text-cyan-700">
          章节
        </span>
        <span className="flex-1 text-sm font-medium text-cyan-800">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'dialogue') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-orange-400 bg-orange-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
          {block.character}
        </span>
        <div className="min-w-0 flex-1">
          {block.stageDirection && (
            <span className="mr-1 text-sm italic text-gray-500">（{block.stageDirection}）</span>
          )}
          <span className="text-sm text-gray-800">{block.text}</span>
        </div>
      </div>
    )
  }

  if (block.type === 'action') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-gray-300 bg-gray-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600">
          动作
        </span>
        <span className="flex-1 text-sm text-gray-700">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'audioEvent') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-purple-300 bg-purple-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
          {block.label}
        </span>
        <span className="flex-1 text-sm italic text-purple-800">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'uiEvent') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-pink-300 bg-pink-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-pink-100 px-2 py-0.5 text-xs font-medium text-pink-700">
          {block.label}
        </span>
        <span className="flex-1 text-sm italic text-pink-800">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'bracketNote') {
    return (
      <div
        data-script-line={block.line}
        className="flex items-start rounded-r-md border-l-4 border-slate-300 bg-slate-50 px-4 py-2"
      >
        <span className="mr-3 inline-flex shrink-0 items-center rounded bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700">
          标记
        </span>
        <span className="flex-1 text-sm italic text-slate-700">{block.text}</span>
      </div>
    )
  }

  return null
}

function SceneCard({ scene }: { scene: Scene }) {
  return (
    <div
      data-scene-line={scene.startLine}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800">[{scene.number}]</h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            {scene.timeOfDay && <span>{scene.timeOfDay}</span>}
            {scene.interior && <span>· {scene.interior}</span>}
            {scene.location && (
              <>
                <span>·</span>
                <span className="font-medium text-gray-700">{scene.location}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {scene.characters.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 border-b border-gray-100 px-5 py-2.5">
          <span className="mr-1 text-xs text-gray-400">人物：</span>
          {scene.characters.map(char => (
            <span
              key={char}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600"
            >
              {char}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2 px-5 py-3">
        {scene.blocks.map((block, index) => (
          <BlockRenderer key={`${block.type}-${index}`} block={block} />
        ))}
        {scene.blocks.length === 0 && (
          <p className="py-4 text-center text-sm text-gray-400">该场次暂无内容</p>
        )}
      </div>
    </div>
  )
}

export function ScriptPreview({ content, className, revealLine }: ScriptPreviewProps) {
  const scenes = useMemo(() => parseScript(content), [content])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !revealLine || scenes.length === 0) return

    const exactAnchor = container.querySelector<HTMLElement>(`[data-script-line="${revealLine}"]`)

    if (exactAnchor) {
      scrollTargetIntoContainer(container, exactAnchor)
      return
    }

    const sceneAnchors = Array.from(container.querySelectorAll<HTMLElement>('[data-scene-line]'))
    const resolvedAnchor = sceneAnchors.reduce<HTMLElement | null>((closest, anchor) => {
      const anchorLine = Number(anchor.dataset.sceneLine)
      if (Number.isNaN(anchorLine) || anchorLine > revealLine) {
        return closest
      }

      if (!closest) return anchor

      return anchorLine > Number(closest.dataset.sceneLine) ? anchor : closest
    }, null) ?? sceneAnchors[0]

    if (resolvedAnchor) {
      scrollTargetIntoContainer(container, resolvedAnchor)
    }
  }, [revealLine, scenes])

  if (!content.trim()) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        <p>暂无内容，请先在编辑模式下输入或导入剧本</p>
      </div>
    )
  }

  if (scenes.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        <p>未能解析出场次信息</p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={className ?? 'mx-auto h-full max-w-3xl space-y-6 overflow-y-auto px-4 py-6'}
    >
      {scenes.map((scene) => (
        <div key={scene.id}>
          <SceneCard scene={scene} />
        </div>
      ))}
    </div>
  )
}
