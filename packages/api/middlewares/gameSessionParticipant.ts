import { NextFunction, Request, Response } from 'express'
import { ForbiddenException } from '../exceptions/forbidden'
import { ErrorCode } from '../exceptions/root'
import { prisma } from '..'
import { NotFoundException } from '../exceptions/not-found'
import { InternalException } from '../exceptions/internal'

const gameSessionParticipantMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user
  const sessionId = req.params.sessionId
  if (!sessionId || !user) {
    next(
      new NotFoundException('Missing user or session ID', ErrorCode.NOT_FOUND),
    )
    return
  }

  try {
    const gameSession = await prisma.gameSession.findUnique({
      where: {
        id: parseInt(sessionId),
      },
      include: {
        participants: true,
      },
    })

    if (!gameSession) {
      next(
        new NotFoundException(
          'Game Session does not exist',
          ErrorCode.GAME_SESSION_NOT_FOUND,
        ),
      )
      return
    }

    const isParticipant = gameSession?.participants.some(
      (participant) => participant?.id === user.id,
    )
    if (!isParticipant) {
      next(
        new ForbiddenException(
          "User isn't taking part in this game session",
          ErrorCode.NOT_PARTICIPANT,
        ),
      )
      return
    }
  } catch (error: any) {
    next(new InternalException(error.message, ErrorCode.SERVER_ERROR, error))
    return
  }
}

export default gameSessionParticipantMiddleware
