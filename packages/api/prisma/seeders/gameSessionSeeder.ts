import { GameState } from '@prisma/client'
import { prisma } from '../..'

export const gameSessions = async () => {
  await prisma.gameSession.createMany({
    data: [
      {
        id: 1,
        gameId: 2,
        state: GameState.CREATED,
        team: 'Team Alpha',
        earnedPoints: 0,
        duration: 0,
        checkpointId: 1,
        inviteCode: '12345abcde',
      },
      {
        id: 2,
        gameId: 2,
        state: GameState.FINISHED,
        team: 'Team Beta',
        earnedPoints: 0,
        duration: 0,
        checkpointId: 2,
        inviteCode: 'abcde12345',
      },
    ],
  })
}
