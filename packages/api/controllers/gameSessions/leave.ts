import { Request, Response } from 'express'
import { prisma } from '../..'

/*
 * Leave the existing gameSession as a participant
 * Check if the user is really a participant of the gameSession
 */
export const leave = async (req: Request, res: Response) => {
  try {
    const { gameSessionId } = req.params // Get the gameSession ID from the route parameters
    const userId = req.user?.id // Get the authenticated user's ID
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' })
    }

    // Fetch the game record with its participants
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: parseInt(gameSessionId) },
      include: {
        participants: true, // Include participants to check if the user is one
      },
    })

    // If the game record does not exist, return a 404 error
    if (!gameSession) {
      return res.status(404).json({ message: 'Game record not found' })
    }

    // Check if the user is a participant
    const isParticipant = gameSession.participants.some(
      (participant) => participant.id === userId,
    )
    if (!isParticipant) {
      return res
        .status(403)
        .json({ message: 'You are not a participant in this game record' })
    }

    // Remove the user from the participants
    const updatedGameSession = await prisma.gameSession.update({
      where: { id: gameSession.id },
      data: {
        participants: {
          disconnect: { id: userId }, // Disconnect the user from the participants
        },
      },
      include: {
        participants: true, // Return the updated participants list
      },
    })

    // Return the updated game record
    res.status(200).json({ session: updatedGameSession })
  } catch (error) {
    console.error('Error leaving game record:', error)
    res
      .status(500)
      .json({ message: 'An error occurred while leaving the game record' })
  }
}
