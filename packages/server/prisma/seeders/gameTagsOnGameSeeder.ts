import { prisma } from '../..'

export const gameTagsOnGames = async () =>
  await prisma.gameTagsOnGame.createMany({
    data: [
      { tagId: 1, gameId: 1 },
      { tagId: 2, gameId: 1 },
      { tagId: 3, gameId: 2 },
      { tagId: 4, gameId: 2 },
    ],
  })
