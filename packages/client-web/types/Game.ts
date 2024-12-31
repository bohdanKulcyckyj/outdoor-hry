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
  gameSessions?: any[]
  tags?: GameTag[]
  purchases?: any[]
}

export type GameTag = {
  id: number
  label: string
}
