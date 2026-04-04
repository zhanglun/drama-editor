import type { Script } from '../../../shared/types'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export async function patchScript(id: string, data: Partial<Script>): Promise<Script> {
  const response = await fetch(`${API_BASE}/scripts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) throw new Error('Failed to patch script')
  return response.json()
}
