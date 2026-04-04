import { apiClient } from '../../../shared/api'
import type { ScriptVersion, ApiResponse } from '../../../shared/types'

export async function getVersions(scriptId: string): Promise<ApiResponse<ScriptVersion[]>> {
  return apiClient.get<ScriptVersion[]>(`/scripts/${scriptId}/versions`)
}
