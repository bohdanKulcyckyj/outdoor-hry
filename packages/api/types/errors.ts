import { ZodError } from 'zod'

export type TError = ZodError | null | Record<string, any>
