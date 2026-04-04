import { apiClient } from '../../../shared/api'
import type { Script, ApiResponse } from '../../../shared/types'

export async function getScript(id: string): Promise<ApiResponse<Script>> {
  return apiClient.get<Script>(`/scripts/${id}`)
}
