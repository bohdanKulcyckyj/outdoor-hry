import { Game, User } from "@prisma/client";

export type TPaginable = User | Game

export type TPaginationOutput = {
    firstPage: number,
    lastPage: number,
    perPage: number,
    nextPage: number,
    prevPage: number,
    currentPage: number,
    data: TPaginable[],
}