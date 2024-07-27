import { Request, Response } from 'express'
import { prisma } from ".."

export const getGameTags = async (req: Request, res: Response) => {
    const tags = await prisma.gameTag.findMany()
    return res.status(200).json(tags)
}