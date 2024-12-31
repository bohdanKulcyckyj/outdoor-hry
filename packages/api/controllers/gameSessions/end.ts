import { Request, Response } from 'express'
import { gameSessions } from '../..'

/*
 * Join the existing gameSession as a participant
 * Check first if the user bought this game
 * Check if there are less than 5 participants -> if so, update gameSession by adding new participant
 */
export const end = async (req: Request, res: Response) => {
  try {
    const { gameSessionId } = req.params // Get the gameSession ID from the route parameters
    const userId = req.user?.id // Get the authenticated user's ID

    const gameSessionManager = gameSessions.find(session => session.gameSessionId === parseInt(gameSessionId))
    if(!gameSessionManager) {
      return res.status(404).json({ message: 'Game session not found' })
    }
    const actionResponse = await gameSessionManager.dispatch({ action: 'end', payload: { userId } })
    if(!actionResponse.success) {
      return res.status(parseInt(actionResponse.code)).json({ message: actionResponse?.errors?.join(", ") ?? 'An error occurred while ending the game' })
    }

    gameSessions.splice(gameSessions.indexOf(gameSessionManager), 1)
    // Return the updated game record
    res.status(200).json({ session: actionResponse.gameSession })
  } catch (error) {
    console.error('Error joining game record:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while joining the game record' })
  }
}
