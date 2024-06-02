import { z } from 'zod'
import { passwordPattern } from './patterns'

export const signUpSchema = z.object({
    name: z.string().max(20, "Jméno je příliš dlouhé"),
    email: z.string().email("Neplatna emailova adresa"),
    password: z.string()
        .min(8, "Heslo musí být alespoň 8 znaků dlouhé")
        .refine((value) => passwordPattern.test(value), {
            message: "Heslo musí obsahovat písmena, čislice a speciální znaky"
        }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Hesla se musí rovnat",
    path: ["confirmPassword"]
})

export type TSignUpSchema = z.infer<typeof signUpSchema> 

export const signInSchema = z.object({
    username: z.string().email("Neplatna emailova adresa"),
    password: z.string()        
        .min(8, "Heslo musí být alespoň 8 znaků dlouhé")
        .refine((value) => passwordPattern.test(value), {
            message: "Heslo musí obsahovat písmena, čislice a speciální znaky"
        }),
})

export type TSignInSchema = z.infer<typeof signInSchema>