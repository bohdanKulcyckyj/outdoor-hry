import { Request, Response } from 'express'
import { prisma } from '../..'
import { compareSync } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { BadRequestException } from '../../exceptions/bad-request'
import { ErrorCode } from '../../exceptions/root'
import { signInSchema } from '@outdoor-game/types/src/validations/requests/auth'
import { validateSchema } from '../../utils/validation'
import { NotFoundException } from '../../exceptions/not-found'
import { ACCESS_TOKEN_EXPIRATION_MINUTES, JWT_SECRET } from '../../secrets'
import { v4 as uuidv4 } from 'uuid'

export const signIn = async (req: Request, res: Response) => {
  const { username: email, password } = req.body
  console.log({ email, password })
  let user = await prisma.user.findFirst({ where: { email } })
  if (!user) {
    throw new NotFoundException(
      'User does not exist!',
      ErrorCode.USER_NOT_FOUND,
    )
  }

  if (!compareSync(password, user.password)) {
    throw new BadRequestException(
      'Incorrect password',
      ErrorCode.INCORRECT_PASSWORD,
    )
  }
  const accessTokenExpiration = ACCESS_TOKEN_EXPIRATION_MINUTES * 60 * 1000
  // Generate access token
  const token = jwt.sign(
    { userId: user.id, userEmail: user.email, userRole: user.role },
    JWT_SECRET,
    { expiresIn: `${ACCESS_TOKEN_EXPIRATION_MINUTES}m` }, // Short-lived access token
  )

  // Generate refresh token
  const refreshToken = uuidv4() // Use UUID for uniqueness
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // Refresh token expires in 7 days

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt,
    },
  })

  res.status(200).json({
    id: user.id,
    email: user.email,
    role: user.role,
    token,
    expiresAt: new Date(Date.now() + accessTokenExpiration),
    refreshToken,
  })
}
