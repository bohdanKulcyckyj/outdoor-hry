import { PageSearchParams } from '@/types/next'

export const normalizeParams = (params: PageSearchParams): Record<string, string> => {
  const normalized: Record<string, string> = {}
  for (const key in params) {
    if (params[key] !== undefined) {
      if (Array.isArray(params[key])) {
        normalized[key] = (params[key] as string[]).join(',')
      } else {
        normalized[key] = params[key] as string
      }
    }
  }
  return normalized
}
