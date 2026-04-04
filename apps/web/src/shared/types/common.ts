export type ExportFormat = 'pdf' | 'docx' | 'txt'

export interface ApiResponse<T = unknown> {
  data: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  offset?: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
