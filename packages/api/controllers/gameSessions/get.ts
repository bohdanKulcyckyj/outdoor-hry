import { Request, Response } from 'express'
import { NotFoundException } from '../../exceptions/not-found'
import { ErrorCode } from '../../exceptions/root'
import { prisma } from '../..'

/*
 * Before creating a game session, check if the user bought this game.
 */
export const create = async (req: Request, res: Response) => {
  try {
    const sessionId = req.params.sessionId
    if(!sessionId) {
        throw new NotFoundException('Session not found', ErrorCode.GAME_SESSION_NOT_FOUND)
    }
    const session = await prisma.gameSession.findUnique({
      where: {
        id: parseInt(sessionId),
      },
    })
    if (!session)
      throw new NotFoundException('Session not found', ErrorCode.GAME_SESSION_NOT_FOUND)

    return res.status(200).json(session)
  } catch (error) {
    console.error('Error finding game session:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while finding the game session' })
  }
}
