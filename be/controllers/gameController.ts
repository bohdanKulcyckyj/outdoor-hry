import { Request, Response } from "express";
import { prisma } from "..";
import { paginateData } from "../utils/pagination";
import { BadRequestException } from "../exceptions/badRequest";
import { ErrorCode } from "../exceptions/root";

export const getGames = async (req: Request, res: Response) => {
    let { page } = req.query
    const perPage = 16
    let requestedPage = 1
    if(page) {
        try {
            const parsedNumber = parseInt(page as string)
            if(isNaN(parsedNumber)) throw new Error()
            requestedPage = parsedNumber
        } catch(e) {
            throw new BadRequestException("Bad query parameter occured in url", ErrorCode.BAD_QUERY_PARAMETER)
        }
    }

    const games = await prisma.game.findMany({
        where: {
            isActive: true
        },
        include: {
            image: true,
            tags: true
        }
        
    })

    res.status(200).json(paginateData(games, requestedPage, perPage))
}