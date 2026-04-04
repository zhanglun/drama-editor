import { apiClient } from '../../../shared/api'
import type { Script, ScriptContent, ApiResponse } from '../../../shared/types'

export async function createScript(data: {
  title: string
  description?: string
  content?: ScriptContent
}): Promise<ApiResponse<Script>> {
  return apiClient.post<Script>('/scripts', data)
}
