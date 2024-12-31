import { Request, Response } from 'express'
import { prisma, gameSessions } from '../..'

/*
 * Join the existing gameSession as a participant
 * Check first if the user bought this game
 * Check if there are less than 5 participants -> if so, update gameSession by adding new participant
 */
export const join = async (req: Request, res: Response) => {
  try {
    const { gameSessionId, inviteCode } = req.params // Get the gameSession ID from the route parameters
    const userId = req.user?.id // Get the authenticated user's ID

    const gameSessionManager = gameSessions.find(session => session.gameSessionId === parseInt(gameSessionId))
    if(!gameSessionManager) {
      return res.status(404).json({ message: 'Game session not found' })
    }

    const actionResult = await gameSessionManager.dispatch({ action: 'join', payload: { userId, inviteCode } })
    if(!actionResult.success) {
      return res.status(parseInt(actionResult.code)).json({ message: actionResult?.errors?.join(", ") ?? 'An error occurred while joining the game' })
    }

    // Return the updated game record
    res.status(200).json({ session: actionResult.gameSession })
  } catch (error) {
    console.error('Error joining game record:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while joining the game record' })
  }
}
