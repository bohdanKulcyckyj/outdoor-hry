import { Request, Response } from 'express'
import { prisma } from '../..'
import { ErrorCode } from '../../exceptions/root'
import { NotFoundException } from '../../exceptions/not-found'

export const get = async (req: Request, res: Response) => {
  const { slug } = req.params

  const game = await prisma.game.findFirst({
    where: {
      slug: slug,
    },
  })
  if (!game) {
    throw new NotFoundException('Game does not exist', ErrorCode.GAME_NOT_FOUND)
  }

  return res.status(200).json(game)
}
