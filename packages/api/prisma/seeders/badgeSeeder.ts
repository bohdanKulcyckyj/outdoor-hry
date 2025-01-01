import { prisma } from '../../'

export const badges = async () =>
  await prisma.badge.createMany({
    data: [
      { id: 1, title: 'Bronze Badge', minExperience: 0, imageId: 2 },
      { id: 2, title: 'Silver Badge', minExperience: 500, imageId: 3 },
      { id: 3, title: 'Gold Badge', minExperience: 1000, imageId: 16 },
    ],
  })
