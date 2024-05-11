import { Request, Response } from "express";
import { prisma } from "..";

export const getGames = async (req: Request, res: Response) => {
    const games = await prisma.game.findMany({
        where: {
            isActive: true
        }
    })

    res.status(200).json(games)
}