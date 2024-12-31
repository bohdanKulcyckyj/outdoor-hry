import { Request, Response } from 'express'
import { gameSessions } from '../..'

export const reachedCheckpoint = async (req: Request, res: Response) => {
  try {
    const { sessionId, checkpointId } = req.params
    
    const gameSessionManager = gameSessions.find(session => session.gameSessionId === parseInt(sessionId))
    if(!gameSessionManager) {
      return res.status(404).json({ message: 'Game session not found' })
    }
    const actionResult = await gameSessionManager.dispatch({ action: 'reachedCheckpoint', payload: { checkpointId } })
    if(!actionResult.success) {
      return res.status(parseInt(actionResult.code)).json({ message: actionResult?.errors?.join(", ") ?? 'An error occurred while reaching the checkpoint' })
    }

    return res.status(200).json({ session: actionResult.gameSession })
  } catch (error) {
    console.error('Error occurred during answering the riddle', error)
    res
      .status(500)
      .json({ message: 'An error occurred while answering the riddle' })
  }
}
