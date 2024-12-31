import { Request, Response } from 'express'
import { prisma } from '../..'
import { compareSync } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { BadRequestException } from '../../exceptions/bad-request'
import { ErrorCode } from '../../exceptions/root'
import { signInSchema } from '@outdoor-game/types/src/validations/requests/auth'
import { validateSchema } from '../../utils/validation'
import { NotFoundException } from '../../exceptions/not-found'
import { JWT_SECRET } from '../../secrets'

export const refreshAccessToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    throw new BadRequestException(
      'Refresh token is required',
      ErrorCode.NOT_FOUND,
    )
  }

  const tokenRecord = await prisma.refreshToken.findUnique({
    where: { token: refreshToken },
    include: { user: true },
  })

  if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
    throw new BadRequestException(
      'Invalid or expired refresh token',
      ErrorCode.NOT_FOUND,
    )
  }

  // Generate new access token
  const newAccessToken = jwt.sign(
    {
      userId: tokenRecord.userId,
      userEmail: tokenRecord.user.email,
      userRole: tokenRecord.user.role,
    },
    JWT_SECRET,
    { expiresIn: '15m' },
  )

  res.status(200).json({ token: newAccessToken })
}
