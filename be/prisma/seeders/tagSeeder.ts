import { prisma } from '../..'

export const tags = async () =>
  await prisma.gameTag.createMany({
    data: [
      { id: 1, label: 'pro děti' },
      { id: 2, label: 'příběhovka' },
      { id: 3, label: 'horror' },
      { id: 4, label: '18+' },
      { id: 5, label: 'naučná' },
      { id: 6, label: 'pro začátečníky' },
      { id: 7, label: 'pro pokročilé' },
    ],
  })
