import { formatDate, formatDateTime } from '../lib/utils'

type DateInput = string | Date

interface UseRelativeDateReturn {
  relative: string
  formatted: string
  datetime: string
}

export function useRelativeDate(dateInput: DateInput): UseRelativeDateReturn {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
    const now = new Date()
    const diffTime = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    let relative: string

    if (diffDays === 0) {
      relative = '今天'
    } else if (diffDays === 1) {
      relative = '昨天'
    } else if (diffDays < 7) {
      relative = `${diffDays}天前`
    } else if (diffDays < 14) {
      relative = '1周前'
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      relative = `${weeks}周前`
    } else if (diffDays < 60) {
      relative = '1个月前'
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30)
      relative = `${months}个月前`
    } else if (diffDays < 730) {
      relative = '1年前'
    } else {
      const years = Math.floor(diffDays / 365)
      relative = `${years}年前`
    }

  return {
    relative,
    formatted: formatDate(date),
    datetime: formatDateTime(date),
  }
}
