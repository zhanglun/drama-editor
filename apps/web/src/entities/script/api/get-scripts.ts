import { apiClient } from '../../../shared/api'
import type { Script, ApiResponse } from '../../../shared/types'

export async function getScripts(): Promise<ApiResponse<Script[]>> {
  return apiClient.get<Script[]>('/scripts')
}
