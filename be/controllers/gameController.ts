import { Request, Response } from "express";
import { prisma } from "..";

export const createGame = async (req: Request, res: Response) => {
    const game = await prisma
}