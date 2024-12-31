import { z } from 'zod'
import {
  numbersDelimitedByCommaPattern,
  positiveIntegerPattern,
} from '../../../patterns/index'

export const gamesListSchema = z.object({
  page: z
    .string()
    .refine((value) => positiveIntegerPattern.test(value))
    .optional(),
  tags: z
    .string()
    .refine((value) => numbersDelimitedByCommaPattern.test(value))
    .optional(),
  search: z.string().optional(),
})
