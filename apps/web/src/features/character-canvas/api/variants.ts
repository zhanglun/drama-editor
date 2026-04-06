import { apiClient } from '../../../shared/api'
import type {
  ApiResponse,
  VariantResponse,
  CreateVariantRequest,
  UpdateVariantRequest,
  VariantScene,
} from '../../../shared/types'

export async function listVariants(scriptId: string): Promise<ApiResponse<VariantResponse[]>> {
  return apiClient.get<VariantResponse[]>(`/scripts/${scriptId}/variants`)
}

export async function getVariant(scriptId: string, variantId: string): Promise<ApiResponse<VariantResponse>> {
  return apiClient.get<VariantResponse>(`/scripts/${scriptId}/variants/${variantId}`)
}

export async function createVariant(scriptId: string, data: CreateVariantRequest): Promise<ApiResponse<VariantResponse>> {
  return apiClient.post<VariantResponse>(`/scripts/${scriptId}/variants`, data)
}

export async function updateVariant(scriptId: string, variantId: string, data: UpdateVariantRequest): Promise<ApiResponse<VariantResponse>> {
  return apiClient.put<VariantResponse>(`/scripts/${scriptId}/variants/${variantId}`, data)
}

export async function deleteVariant(scriptId: string, variantId: string, cascade = false): Promise<ApiResponse<void>> {
  const query = cascade ? '?cascade=true' : ''
  return apiClient.delete<void>(`/scripts/${scriptId}/variants/${variantId}${query}`)
}

export async function addSceneLinks(scriptId: string, variantId: string, sceneIds: string[]): Promise<ApiResponse<void>> {
  return apiClient.post<void>(`/scripts/${scriptId}/variants/${variantId}/links`, { scene_ids: sceneIds })
}

export async function removeSceneLink(scriptId: string, variantId: string, sceneId: string): Promise<ApiResponse<void>> {
  return apiClient.delete<void>(`/scripts/${scriptId}/variants/${variantId}/links/${sceneId}`)
}

export async function getSceneLinks(scriptId: string, variantId: string): Promise<ApiResponse<VariantScene[]>> {
  return apiClient.get<VariantScene[]>(`/scripts/${scriptId}/variants/${variantId}/links`)
}
