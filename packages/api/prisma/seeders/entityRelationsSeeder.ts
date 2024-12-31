import { prisma } from '../..'

export const entityRelations = async () => {
  // GAMES
  await prisma.game.update({
    where: { id: 1 },
    data: {
      tags: {
        set: [{ id: 1 }, { id: 5 }, { id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 2 },
    data: {
      tags: {
        set: [{ id: 5 }, { id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 3 },
    data: {
      tags: {
        set: [{ id: 2 }, { id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 4 },
    data: {
      tags: {
        set: [{ id: 3 }, { id: 4 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 5 },
    data: {
      tags: {
        set: [{ id: 1 }, { id: 2 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 6 },
    data: {
      tags: {
        set: [{ id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 7 },
    data: {
      tags: {
        set: [{ id: 1 }, { id: 2 }, { id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 8 },
    data: {
      tags: {
        set: [{ id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 9 },
    data: {
      tags: {
        set: [{ id: 6 }],
      },
    },
  })

  await prisma.game.update({
    where: { id: 10 },
    data: {
      tags: {
        set: [{ id: 6 }],
      },
    },
  })

  // GAME RECORDS
  await prisma.gameSession.update({
    where: { id: 1 },
    data: {
      participants: {
        set: [{ id: 1 }],
      },
    },
  })

  await prisma.gameSession.update({
    where: { id: 2 },
    data: {
      participants: {
        set: [{ id: 2 }],
      },
    },
  })

  // TAGS
  await prisma.gameTag.update({
    where: { id: 1 },
    data: {
      games: {
        set: [{ id: 1 }, { id: 5 }, { id: 7 }],
      },
    },
  })

  await prisma.gameTag.update({
    where: { id: 2 },
    data: {
      games: {
        set: [{ id: 5 }, { id: 7 }, { id: 3 }],
      },
    },
  })

  await prisma.gameTag.update({
    where: { id: 3 },
    data: {
      games: {
        set: [{ id: 4 }],
      },
    },
  })

  await prisma.gameTag.update({
    where: { id: 4 },
    data: {
      games: {
        set: [{ id: 4 }],
      },
    },
  })

  await prisma.gameTag.update({
    where: { id: 5 },
    data: {
      games: {
        set: [{ id: 1 }, { id: 2 }],
      },
    },
  })

  await prisma.gameTag.update({
    where: { id: 6 },
    data: {
      games: {
        set: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 10 },
        ],
      },
    },
  })

  // USERS
  await prisma.user.update({
    where: { id: 1 },
    data: {
      participations: {
        set: [{ id: 1 }],
      },
    },
  })
  await prisma.user.update({
    where: { id: 2 },
    data: {
      participations: {
        set: [{ id: 2 }],
      },
    },
  })
}
