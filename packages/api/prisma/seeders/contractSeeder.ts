import { prisma } from '../../'

export const contracts = async () =>
  await prisma.contract.createMany({
    data: [
      { gameId: 1, userId: 3, fileId: 6 },
      { gameId: 2, userId: 3, fileId: 14 },
    ],
  })
