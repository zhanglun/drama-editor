import { patchScript } from '../../../entities/script/api'
import type { ScriptContent } from '../../../shared/types'

interface QueueItem {
  scriptId: string
  content: ScriptContent
  timestamp: number
}

class SaveQueue {
  private queue: Map<string, QueueItem> = new Map()
  private isProcessing = false

  async enqueue(scriptId: string, content: ScriptContent, immediate = false): Promise<void> {
    this.queue.set(scriptId, {
      scriptId,
      content,
      timestamp: Date.now(),
    })

    if (immediate) {
      await this.processQueue()
    }
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing) return
    this.isProcessing = true

    try {
      const items = Array.from(this.queue.values())
      this.queue.clear()

      await Promise.all(
        items.map(item =>
          patchScript(item.scriptId, {
            content: item.content,
          })
        )
      )
    } finally {
      this.isProcessing = false
    }
  }

  clear(): void {
    this.queue.clear()
  }

  get size(): number {
    return this.queue.size
  }
}

export const saveQueue = new SaveQueue()
