import { Request, Response } from 'express'
import { prisma } from '../..'
import { paginateData } from '../../utils/pagination'
import { BadRequestException } from '../../exceptions/bad-request'
import { ErrorCode } from '../../exceptions/root'
import { gamesListSchema } from '@outdoor-game/types/src/validations/requests/games'
import { validateSchema } from '../../utils/validation'

export const list = async (req: Request & { user?: any }, res: Response) => {
  console.log('user')
  console.log(req.user)

  validateSchema(
    req.query,
    gamesListSchema,
    'getGames input schema validation failed',
  )

  let { page, tags, search } = req.query
  const PER_PAGE = 6
  let requestedPage = 1
  let gameTags: { id: number; label: string }[] = []
  if (page) {
    try {
      const parsedNumber = parseInt(page as string)
      if (isNaN(parsedNumber)) throw new Error()
      requestedPage = parsedNumber
    } catch (e) {
      throw new BadRequestException(
        'Bad query parameter occured in url - page',
        ErrorCode.BAD_QUERY_PARAMETER,
      )
    }
  }
  if (tags) {
    try {
      const filteredTagIds = String(tags)
        .split(',')
        .map((_item) => parseInt(_item))
      gameTags = (await prisma.gameTag.findMany()).filter((_item: any) =>
        filteredTagIds.includes(_item.id),
      )
    } catch (e) {
      throw new BadRequestException(
        'Bad query parameter occured in url - tags',
        ErrorCode.BAD_QUERY_PARAMETER,
      )
    }
  }

  const searchFilter = {
    OR: [
      {
        title: { startsWith: search as string },
      },
      {
        place: { startsWith: search as string },
      },
    ],
  }

  const games = await prisma.game.findMany({
    where: {
      isActive: true,
      ...(search && searchFilter),
      ...(gameTags.length && {
        tags: {
          some: {
            id: { in: gameTags.map((tag) => tag.id) },
          },
        },
      }),
    },
    include: {
      image: true,
      tags: {
        select: {
          label: true,
        },
      },
    },
  })

  return res.status(200).json(paginateData(games, requestedPage, PER_PAGE))
}
