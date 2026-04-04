import { apiClient } from '../../../shared/api'
import type { ApiResponse } from '../../../shared/types'

export async function deleteScript(id: string): Promise<ApiResponse<void>> {
  return apiClient.delete<void>(`/scripts/${id}`)
}
