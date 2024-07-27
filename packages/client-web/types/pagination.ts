import { GameDTO } from './Game'

export type TPaginable = GameDTO

export type TPagination = {
  firstPage: number
  lastPage: number
  perPage: number
  nextPage: number
  prevPage: number
  currentPage: number
  data: TPaginable[]
}
