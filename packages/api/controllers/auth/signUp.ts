import { Request, Response } from 'express'
import { prisma } from '../..'
import { hashSync } from 'bcrypt'
import { BadRequestException } from '../../exceptions/bad-request'
import { ErrorCode } from '../../exceptions/root'
import { signUpSchema } from '@outdoor-game/types/src/validations/requests/auth'
import { InternalException } from '../../exceptions/internal'
import { validateSchema } from '../../utils/validation'

export const signUp = async (req: Request, res: Response) => {
  const result = signUpSchema.safeParse(req.body)
  if (!result.success) {
    let zodErrors = {}
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
    })
    return res.status(422).json({ errors: zodErrors })
  }

  validateSchema(
    req.body,
    signUpSchema,
    'SignUp input schema validation failed',
  )

  const { email, password, name } = req.body

  let user = await prisma.user.findFirst({ where: { email } })

  if (user) {
    throw new BadRequestException(
      'User already exists!',
      ErrorCode.USER_ALREADY_EXISTS,
    )
  }

  const badge = await prisma.badge.findFirst({
    where: {
      minExperience: 0,
    },
  })

  if (!badge) {
    throw new InternalException(
      'Default Badge has not found!',
      ErrorCode.SERVER_LOGIC_ERROR,
      null,
    )
  }

  user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
      badgeId: badge.id,
    },
  })

  res.status(201).json(user)
}
