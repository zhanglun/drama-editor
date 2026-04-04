import { apiClient } from '../../../shared/api'
import type { ApiResponse } from '../../../shared/types'

import type { ScriptVersion } from '../../../shared/types'

export async function deleteVersion(scriptId: string, versionId: string): Promise<ApiResponse<void>> {
  return apiClient.delete<void>(`/scripts/${scriptId}/versions/${versionId}`)
}
