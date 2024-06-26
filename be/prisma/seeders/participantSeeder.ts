import { prisma } from '../..'

export const participants = async () =>
  await prisma.participant.createMany({
    data: [
      {
        gameRecordId: 1,
        userId: 1,
      },
      {
        gameRecordId: 2,
        userId: 2,
      },
    ],
  })
