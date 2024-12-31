import { UnprocessableEntityException } from '../exceptions/validation'

export const validateSchema = (
  data: any,
  schema: Zod.AnyZodObject | Zod.Schema,
  message: string = 'Entity schema validation failed',
) => {
  const result = schema.safeParse(data)
  if (!result.success) {
    console.log('schema is invalid!')
    throw new UnprocessableEntityException(message, result.error)
  }
}
