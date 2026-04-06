import { apiClient } from '../../../shared/api'
import type {
  ApiResponse,
  Character,
  CreateCharacterRequest,
  UpdateCharacterRequest,
} from '../../../shared/types'

export async function createCharacter(
  scriptId: string,
  data: CreateCharacterRequest,
): Promise<ApiResponse<Character>> {
  return apiClient.post<Character>(`/scripts/${scriptId}/characters`, data)
}

export async function updateCharacter(
  scriptId: string,
  characterId: string,
  data: UpdateCharacterRequest,
): Promise<ApiResponse<Character>> {
  return apiClient.put<Character>(`/scripts/${scriptId}/characters/${characterId}`, data)
}
