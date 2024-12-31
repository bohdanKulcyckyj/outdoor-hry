import { Request, Response } from 'express'
import { generateInviteCode } from '../../utils/generateCode'
import { prisma, gameSessions } from '../..'
import { GameSessionManager } from './game-session-manager'
import { NotFoundException } from '../../exceptions/not-found'
import { ErrorCode } from '../../exceptions/root'

/*
 * Before creating a game session, check if the user bought this game.
 */
export const create = async (req: Request, res: Response) => {
  try {
    const { gameId: inputGameId, team } = req.params
    const userId = req.user?.id // Assuming this comes from authenticated user middleware
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' })
    }

    const gameId = parseInt(inputGameId)

    // Check if the user has purchased this game
    const purchasedGame = await prisma.purchasedGames.findUnique({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
    })

    if (!purchasedGame) {
      return res
        .status(403)
        .json({ message: 'You have not purchased this game' })
    }

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    })
    if (!game)
      throw new NotFoundException('Game not found', ErrorCode.GAME_NOT_FOUND)

    const checkpoints = await prisma.checkpoint.findMany({
      where: {
        gameId,
      },
    })
    if (checkpoints.length === 0)
      throw new NotFoundException(
        'Found no checkpoint for game',
        ErrorCode.CHECKPOINTS_NOT_FOUND,
      )

    // Create a new game session (GameSession)
    const session = await prisma.gameSession.create({
      data: {
        gameId,
        inviteCode: generateInviteCode(10),
        team,
        participants: {
          connect: { id: userId },
        },
      },
      include: {
        participants: true,
      },
    })

    const gameSessionStateMachine = new GameSessionManager(
      session,
      game,
      checkpoints,
      prisma,
    )
    gameSessions.push(gameSessionStateMachine)
    res.status(201).json({ session })
  } catch (error) {
    console.error('Error creating game session:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while creating the game session' })
  }
}
