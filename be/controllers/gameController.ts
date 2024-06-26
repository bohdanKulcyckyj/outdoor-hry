import { Request, Response } from 'express'
import { prisma } from '..'
import { paginateData } from '../utils/pagination'
import { BadRequestException } from '../exceptions/badRequest'
import { ErrorCode } from '../exceptions/root'

export const getGames = async (req: Request, res: Response) => {
  let { page, tags, search } = req.query
  const perPage = 6
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
      gameTags = (await prisma.gameTag.findMany()).filter((_item) =>
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
            tagId: { in: gameTags.map((tag) => tag.id) },
          },
        },
      }),
    },
    include: {
      image: true,
      tags: {
        select: {
          tag: true,
        },
      },
    },
  })
  console.log('requesting games...')
  console.log(games)

  return res.status(200).json(paginateData(games, requestedPage, perPage))
}
