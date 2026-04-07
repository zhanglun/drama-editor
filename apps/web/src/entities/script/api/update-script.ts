import { apiClient } from '../../../shared/api'
import type { Script, ApiResponse } from '../../../shared/types'

export async function updateScript(
  id: string,
  data: Partial<Omit<Script, 'id' | 'created_at' | 'updated_at'>>
): Promise<ApiResponse<Script>> {
  return apiClient.put<Script>(`/scripts/${id}`, data)
}

export async function patchScript(
  id: string,
  data: Partial<Omit<Script, 'id' | 'created_at' | 'updated_at'>>
): Promise<ApiResponse<Script>> {
  return apiClient.patch<Script>(`/scripts/${id}`, data)
}
