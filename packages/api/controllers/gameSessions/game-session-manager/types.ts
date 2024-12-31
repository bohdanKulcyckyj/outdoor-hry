import { Checkpoint, Game, PrismaClient } from '@prisma/client'

export type BaseGameSessionAction = {
  action: 'base-action'
  payload: {
    gameSessionId: number
  }
}

export type ExtendedGameSessionAction = {
  action: 'extended-action'
  payload: {
    gameSessionId: number
    checkpointId: number
  }
}

export type GameSessionJoinAction = {
  action: 'join'
  payload: {
    userId: number
    inviteCode: string
  }
}

export type GameSessionEndAction = {
  action: 'end'
  payload: {
    userId: number
  }
}

export type GameSessionAnswerAction = {
  action: 'answer'
  payload: {
    userId: number
    checkpointId: number
    answer: string
  }
}

export type GameSessionUseHintAction = {
  action: 'use-hint'
  payload: {
    userId: number
    checkpointId: number
  }
}

export type DispatchGameSessionAction = {
  action: string
  payload: Record<string, any>
}

export type DispatchGameSessionActionResponseSuccess = {
  success: boolean
  gameSession: GameSession
}

export type DispatchGameSessionActionResponseError = {
  success: boolean
  errors?: string[]
}

export type DispatchGameSessionActionResponse = {
  code: string
} & (
  | DispatchGameSessionActionResponseSuccess
  | DispatchGameSessionActionResponseError
)

export type StateMachineContext = {
  gameSessionId: number
  game: Game
  checkpoints: Checkpoint[]
  prisma: PrismaClient
}

export type StateMachineStates = {
  [stateName: string]: {
    [methodName: string]: (
      action: any,
    ) => Promise<DispatchGameSessionActionResponse>
  }
}

export type GameSessionState =
  | 'CREATED'
  | 'WAY_TO_CHECKPOINT'
  | 'CHECKPOINT'
  | 'FINISHED'
  | 'TIMEOUT'
