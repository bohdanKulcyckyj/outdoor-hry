import { Request, Response } from 'express'
import { gameSessions } from '../..'

export const useHint = async (req: Request, res: Response) => {
  try {
    const { sessionId, hintId } = req.params

    const gameSessionManager = gameSessions.find(
      session => session.gameSessionId === parseInt(sessionId),
    )

    if (!gameSessionManager) {
      return res.status(404).json({ message: 'Game session not found' })
    }

    const actionResult = await gameSessionManager.dispatch({
      action: 'useHint',
      payload: { hintId },
    })

    if (!actionResult.success) {
      return res
        .status(parseInt(actionResult.code))
        .json({
          message: actionResult?.errors?.join(', ') ?? 'An error occurred while revealing the hint',
        })
    }

    return res.status(200).json({ session: actionResult.gameSession })
  } catch (error) {
    console.error('Error occurred during revealing the hint', error)
    res
      .status(500)
      .json({ message: 'An error occurred while revealing the hint' })
  }
}
