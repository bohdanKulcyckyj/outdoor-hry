import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT
export const ACCESS_TOKEN_EXPIRATION_MINUTES =
  parseInt(process.env.ACCESS_TOKEN_EXPIRATION_MINUTES ?? "15")
export const JWT_SECRET = process.env.JWT_SECRET!
