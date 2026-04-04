const MAX_RETRIES = 3
const RETRY_DELAY = 1000

interface RetryOptions {
  maxRetries?: number
  delay?: number
  onRetry?: (attempt: number, error: Error) => void
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries = MAX_RETRIES, delay = RETRY_DELAY, onRetry } = options
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      if (attempt < maxRetries) {
        onRetry?.(attempt, lastError)
        await new Promise(resolve => setTimeout(resolve, delay * attempt))
      }
    }
  }

  throw lastError
}

export function isOnline(): boolean {
  return navigator.onLine
}

export function addOnlineListener(callback: () => void): () => void {
  window.addEventListener('online', callback)
  return () => window.removeEventListener('online', callback)
}

export function addOfflineListener(callback: () => void): () => void {
  window.addEventListener('offline', callback)
  return () => window.removeEventListener('offline', callback)
}

export class NetworkError extends Error {
  constructor(
    message: string,
    public readonly isOffline: boolean = false,
    public readonly statusCode?: number
  ) {
    super(message)
    this.name = 'NetworkError'
  }
}

export async function fetchWithNetworkCheck(
  url: string,
  options?: RequestInit
): Promise<Response> {
  if (!isOnline()) {
    throw new NetworkError('网络连接不可用，请检查您的网络设置', true)
  }

  try {
    const response = await fetch(url, options)
    
    if (!response.ok) {
      throw new NetworkError(
        `请求失败: ${response.statusText}`,
        false,
        response.status
      )
    }
    
    return response
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error
    }
    
    if (!isOnline()) {
      throw new NetworkError('网络连接已断开', true)
    }
    
    throw new NetworkError(
      `网络请求失败: ${(error as Error).message}`,
      false
    )
  }
}

export function validateScriptContent(content: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!content) {
    return { valid: true, errors: [] }
  }

  if (typeof content !== 'object') {
    errors.push('内容格式无效')
    return { valid: false, errors }
  }

  const scriptContent = content as Record<string, unknown>

  if (scriptContent.type && scriptContent.type !== 'doc') {
    errors.push('内容类型必须是 "doc"')
  }

  if (scriptContent.content && !Array.isArray(scriptContent.content)) {
    errors.push('内容必须是数组')
  }

  if (scriptContent.characters && !Array.isArray(scriptContent.characters)) {
    errors.push('角色列表必须是数组')
  }

  if (scriptContent.metadata && typeof scriptContent.metadata !== 'object') {
    errors.push('元数据必须是对象')
  }

  return { valid: errors.length === 0, errors }
}

export function validateScriptTitle(title: string): { valid: boolean; error?: string } {
  if (!title || !title.trim()) {
    return { valid: false, error: '标题不能为空' }
  }

  if (title.length > 200) {
    return { valid: false, error: '标题不能超过 200 个字符' }
  }

  return { valid: true }
}
