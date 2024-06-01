import { z } from 'zod'

export const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

export const signInSchema = z.object({
    username: z.string().email(),
    password: z.string()
})