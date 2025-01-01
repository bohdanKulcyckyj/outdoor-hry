import { prisma } from '../../'

export const purchasedGames = async () =>
  await prisma.purchasedGames.createMany({
    data: [
      { userId: 1, gameId: 1, played: false },
      { userId: 1, gameId: 2, played: true },
    ],
  })
