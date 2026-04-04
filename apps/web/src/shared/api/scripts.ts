import { apiClient } from './client'
import type { Script, ScriptContent, ScriptVersion } from '../types'
import type { ApiResponse, PaginatedResponse } from '../types'

export const scriptsApi = {
  async getAll(page = 1, limit = 20): Promise<ApiResponse<PaginatedResponse<Script>>> {
    return apiClient.getPaginated<Script>('/scripts', { page, limit })
  },

  async getById(id: string): Promise<ApiResponse<Script>> {
    return apiClient.get<Script>(`/scripts/${id}`)
  },

  async create(data: {
    title: string
    description?: string
    content?: ScriptContent
  }): Promise<ApiResponse<Script>> {
    return apiClient.post<Script>('/scripts', data)
  },

  async update(
    id: string,
    data: Partial<Omit<Script, 'id' | 'created_at' | 'updated_at'>>
  ): Promise<ApiResponse<Script>> {
    return apiClient.put<Script>(`/scripts/${id}`, data)
  },

  async delete(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/scripts/${id}`)
  },

  async getVersions(scriptId: string): Promise<ApiResponse<ScriptVersion[]>> {
    return apiClient.get<ScriptVersion[]>(`/scripts/${scriptId}/versions`)
  },

  async getVersion(
    scriptId: string,
    versionNumber: number
  ): Promise<ApiResponse<ScriptVersion>> {
    return apiClient.get<ScriptVersion>(
      `/scripts/${scriptId}/versions/${versionNumber}`
    )
  },

  async createVersion(
    scriptId: string,
    data: { change_summary?: string }
  ): Promise<ApiResponse<ScriptVersion>> {
    return apiClient.post<ScriptVersion>(`/scripts/${scriptId}/versions`, data)
  },

  async export(
    scriptId: string,
    format: 'pdf' | 'docx' | 'txt'
  ): Promise<ApiResponse<Blob>> {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL || '/api'}/export/scripts/${scriptId}/${format}`
    )
    
    if (!response.ok) {
      return {
        data: null as unknown as Blob,
        error: '导出失败',
      }
    }

    const blob = await response.blob()
    return { data: blob }
  },
}
