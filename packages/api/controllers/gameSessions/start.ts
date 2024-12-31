import { Request, Response } from 'express'
import { prisma, gameSessions } from '../..'

/*
 * Fetching gameSession by id and check if user is a participant
 * then update start date to now
 * then update checkpoint to first checkpoint in the game
 */
export const start = async (req: Request, res: Response) => {
  try {
    const { gameSessionId } = req.params // Assuming the ID is passed as a route parameter
    const userId = req.user?.id // Get the user ID from the authenticated request

    const gameSessionManager = gameSessions.find(session => session.gameSessionId === parseInt(gameSessionId))
    if(!gameSessionManager) {
      return res.status(404).json({ message: 'Game session not found' })
    }

    const actionResponse = await gameSessionManager.dispatch({ action: 'start', payload: { userId } })
    if(!actionResponse.success) {
      return res.status(parseInt(actionResponse.code)).json({ message: actionResponse?.errors?.join(", ") ?? 'An error occurred while starting the game record' })
    }
    // Return the updated game record
    res.status(200).json({ session: actionResponse.gameSession })
  } catch (error) {
    console.error('Error starting game record:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while starting the game record' })
  }
}
