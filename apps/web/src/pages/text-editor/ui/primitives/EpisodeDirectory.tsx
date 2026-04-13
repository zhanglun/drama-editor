import { ListVideo } from 'lucide-react'
import type { EpisodeSegment } from '../../model'

interface EpisodeDirectoryProps {
  episodes: EpisodeSegment[]
  activeEpisodeId?: string
  onSelect: (index: number) => void
}

export function EpisodeDirectory({ episodes, activeEpisodeId, onSelect }: EpisodeDirectoryProps) {
  return (
    <div className="flex h-full flex-col bg-[#211d1d] text-[#f5f2f2]">
      <div className="border-b border-white/8 px-4 py-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#a29a9f]">
          <ListVideo className="h-3.5 w-3.5" />
          剧集目录
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-medium">剧集</span>
          <span className="rounded-full bg-white/6 px-2 py-0.5 text-xs text-[#c9c1c5]">
            {episodes.length} 集
          </span>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
        <div className="space-y-2">
          {episodes.map((episode) => {
            const isActive = episode.id === activeEpisodeId

            return (
              <button
                key={episode.id}
                type="button"
                onClick={() => onSelect(episode.index)}
                className={`w-full rounded-xl border px-3 py-3 text-left transition ${
                  isActive
                    ? 'border-[#ff4f98] bg-[#312329] text-white shadow-[0_0_0_1px_rgba(255,79,152,0.2)]'
                    : 'border-white/6 bg-white/[0.03] text-[#d7d1d4] hover:border-white/12 hover:bg-white/[0.05]'
                }`}
              >
                <div className="truncate text-sm font-medium">{episode.title}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
