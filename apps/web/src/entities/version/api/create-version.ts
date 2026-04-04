import { apiClient } from '../../../shared/api'
import type { ScriptVersion, ScriptContent } from '../../../shared/types'

export async function createVersion(
  scriptId: string,
  content: ScriptContent,
  changeSummary?: string
): Promise<ScriptVersion> {
  return apiClient.post<ScriptVersion>(`/scripts/${scriptId}/versions`, {
    content,
    change_summary: changeSummary,
  })
}
