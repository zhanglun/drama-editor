import { apiClient } from '../../../shared/api'
import type { ScriptVersion, ScriptContent, ApiResponse } from '../../../shared/types'

export async function createVersion(
  scriptId: string,
  content: ScriptContent,
  changeSummary?: string
): Promise<ApiResponse<ScriptVersion>> {
  return apiClient.post<ScriptVersion>(`/scripts/${scriptId}/versions`, {
    content,
    change_summary: changeSummary,
  })
}
