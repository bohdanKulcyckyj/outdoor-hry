import { NextFunction, Request, Response } from 'express'
import { UnauthorizedException } from '../exceptions/unauthorized'
import { ErrorCode } from '../exceptions/root'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secrets'
import { prisma } from '..'
import { User } from '@prisma/client'

const authMiddleware = async (
  req: Request & { user?: User },
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = String(
      req.headers.authorization || req.headers.Authorization,
    )

    console.log(authHeader)
    if (!authHeader?.startsWith('Bearer ')) throw null
    const token = authHeader.replace('Bearer ', '')
    console.log(token)
    const payload = jwt.verify(String(token), JWT_SECRET) as any
    console.log(payload)
    const user = await prisma.user.findFirst({
      where: {
        id: payload.userId,
        email: payload.userEmail,
      },
    })
    if (!user) throw Error()
    req.user = user
    console.log('jooo jsi prihlaseny')
    next()
  } catch (err: any) {
    console.log(err)
    next(
      new UnauthorizedException('Unauthorized', ErrorCode.UNAUTHORIZED, null),
    )
  }
}

export default authMiddleware
