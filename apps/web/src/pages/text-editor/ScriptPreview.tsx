import { useMemo } from 'react'
import type { Scene, ScriptBlock } from './parseScript'
import { parseScript } from './parseScript'

interface ScriptPreviewProps {
  content: string
}

function BlockRenderer({ block }: { block: ScriptBlock }) {
  if (block.type === 'episodeHeader') {
    return (
      <div className="flex items-start py-2 px-4 bg-fuchsia-50 border-l-4 border-fuchsia-400 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-fuchsia-100 text-fuchsia-700 text-xs font-medium rounded mr-3 shrink-0">
          集头
        </span>
        <span className="text-fuchsia-800 text-sm font-medium flex-1">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'sectionHeader') {
    return (
      <div className="flex items-start py-2 px-4 bg-cyan-50 border-l-4 border-cyan-400 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-medium rounded mr-3 shrink-0">
          章节
        </span>
        <span className="text-cyan-800 text-sm font-medium flex-1">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'dialogue') {
    return (
      <div className="flex items-start py-2 px-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded mr-3 shrink-0">
          {block.character}
        </span>
        <div className="flex-1 min-w-0">
          {block.stageDirection && (
            <span className="text-gray-500 text-sm italic mr-1">（{block.stageDirection}）</span>
          )}
          <span className="text-gray-800 text-sm">{block.text}</span>
        </div>
      </div>
    )
  }

  if (block.type === 'action') {
    return (
      <div className="flex items-start py-2 px-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-gray-200 text-gray-600 text-xs font-medium rounded mr-3 shrink-0">
          动作
        </span>
        <span className="text-gray-700 text-sm flex-1">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'audioEvent') {
    return (
      <div className="flex items-start py-2 px-4 bg-purple-50 border-l-4 border-purple-300 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded mr-3 shrink-0">
          {block.label}
        </span>
        <span className="text-purple-800 text-sm italic flex-1">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'uiEvent') {
    return (
      <div className="flex items-start py-2 px-4 bg-pink-50 border-l-4 border-pink-300 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-pink-100 text-pink-700 text-xs font-medium rounded mr-3 shrink-0">
          {block.label}
        </span>
        <span className="text-pink-800 text-sm italic flex-1">{block.text}</span>
      </div>
    )
  }

  if (block.type === 'bracketNote') {
    return (
      <div className="flex items-start py-2 px-4 bg-slate-50 border-l-4 border-slate-300 rounded-r-md">
        <span className="inline-flex items-center px-2 py-0.5 bg-slate-200 text-slate-700 text-xs font-medium rounded mr-3 shrink-0">
          标记
        </span>
        <span className="text-slate-700 text-sm italic flex-1">{block.text}</span>
      </div>
    )
  }

  return null
}

function SceneCard({ scene }: { scene: Scene }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800">
            [{scene.number}]
          </h3>
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
        <div className="px-5 py-2.5 border-b border-gray-100 flex items-center flex-wrap gap-1.5">
          <span className="text-xs text-gray-400 mr-1">人物：</span>
          {scene.characters.map(char => (
            <span
              key={char}
              className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-200"
            >
              {char}
            </span>
          ))}
        </div>
      )}

      <div className="px-5 py-3 space-y-2">
        {scene.blocks.map((block, index) => (
          <BlockRenderer key={`${block.type}-${index}`} block={block} />
        ))}
        {scene.blocks.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-4">该场次暂无内容</p>
        )}
      </div>
    </div>
  )
}

export function ScriptPreview({ content }: ScriptPreviewProps) {
  const scenes = useMemo(() => parseScript(content), [content])

  if (!content.trim()) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <p>暂无内容，请先在编辑模式下输入或上传文本</p>
      </div>
    )
  }

  if (scenes.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <p>未能解析出场次信息</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 space-y-6 overflow-y-auto h-full">
      {scenes.map(scene => (
        <SceneCard key={scene.id} scene={scene} />
      ))}
    </div>
  )
}
