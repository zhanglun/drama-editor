import type { Script } from '../../../shared/types'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

export async function duplicateScript(originalScript: Script): Promise<Script> {
  const response = await fetch(`${API_BASE}/scripts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: `Copy of ${originalScript.title}`,
      description: originalScript.description,
      content: originalScript.content,
    }),
  })
  
  if (!response.ok) throw new Error('Failed to duplicate script')
  return response.json()
}
