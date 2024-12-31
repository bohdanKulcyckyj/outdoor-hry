import { Role } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { prisma } from '../..'

export const users = async () => {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
      {
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        password: hashSync('xxxxx', 10),
        role: Role.ADMIN,
        badgeId: 3,
      },
      {
        id: 3,
        name: 'Charlie',
        email: 'charlie@example.com',
        password: hashSync('123456789', 10),
        role: Role.CREATOR,
        badgeId: 1,
      },
      {
        id: 4,
        name: 'Alan',
        email: 'alan@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
      {
        id: 5,
        name: 'Jake',
        email: 'jake@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
      {
        id: 6,
        name: 'Milda',
        email: 'milda@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
      {
        id: 7,
        name: 'Pavel',
        email: 'pavel@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
      {
        id: 8,
        name: 'Petr',
        email: 'petr@example.com',
        password: hashSync('12345', 10),
        role: Role.USER,
        badgeId: 1,
      },
    ],
  })
}
