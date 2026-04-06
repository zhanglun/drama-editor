import { apiClient } from '../../../shared/api'
import type { ApiResponse, CanvasState } from '../../../shared/types'

export async function getCanvasState(scriptId: string): Promise<ApiResponse<CanvasState>> {
  return apiClient.get<CanvasState>(`/scripts/${scriptId}/canvas`)
}

export async function saveCanvasState(scriptId: string, state: CanvasState): Promise<ApiResponse<CanvasState>> {
  return apiClient.put<CanvasState>(`/scripts/${scriptId}/canvas`, state)
}
