import { FileDTO } from './File'
import { GameDificultness } from './enums'

export type GameDTO = {
  id: number
  title: string
  description: string
  place: string
  dificultness: GameDificultness
  startingCheckpointId: number
  endingCheckpointId: number
  createdAt: string
  updatedAt: string
  imageId: number
  authorId: number
  isActive: boolean
  price: number
  maxPoints: number
  image: FileDTO

  checkpoints?: any[]
  contract?: any[]
  gameRecords?: any[]
  tags?: GameTagRelation[]
  purchases?: any[]
}

export type GameTagRelation = {
  tagId: number
  gameId: number
  tag?: GameTag
  game?: GameDTO
}

export type GameTag = {
  id: number
  label: string
}
