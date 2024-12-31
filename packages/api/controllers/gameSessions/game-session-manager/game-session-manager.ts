import { Checkpoint, Game, GameSession, PrismaClient } from '@prisma/client'
import Mutex from '../../../utils/mutex'
import { WebSocketHandler } from '../../../utils/socket'
import {
  DispatchGameSessionAction,
  DispatchGameSessionActionResponse,
  GameSessionEndAction,
  GameSessionState,
  GameSessionJoinAction,
  StateMachineContext,
  StateMachineStates,
} from './types'

// first we look into fetched gameSession in which state we are currently
// 1. initial state ( waiting in the lobby for all players to join )
// 3. wayToCheckpoint ( display map and description how to get there )
// 4. checkpoint ( see all description, image, riddle )
// 5a. answer
// 5b. use hint
// 6. end

const initStateMachine = (
  currState: GameSessionState = 'CREATED',
  ctx: StateMachineContext,
) => {
  const context = ctx
  const currentState = currState
  const states: StateMachineStates = {
    CREATED: {
      start: async (action: DispatchGameSessionAction) => {
        const { gameSessionId, prisma } = context
        const gameSession = await prisma.gameSession.findUnique({
          where: { id: gameSessionId },
          include: {
            game: {
              include: {
                checkpoints: true, // Include checkpoints for the game
              },
            },
            participants: true, // Include participants to check if the user is one
          },
        })
        if (!gameSession) {
          return {
            success: false,
            code: '404',
            errors: ['Game record not found'],
          }
        }

        // Get the first checkpoint in the game
        const firstCheckpoint = gameSession.game.checkpoints.sort(
          (a, b) => a.ordering - b.ordering,
        )[0]

        // If there are no checkpoints, return an error
        if (!firstCheckpoint) {
          return {
            success: false,
            code: '404',
            errors: ['No checkpoints found for this game'],
          }
        }

        // Update the game record to set the start date to now and checkpoint to the first checkpoint
        const updatedGameSession = await prisma.gameSession.update({
          where: { id: gameSession.id },
          data: {
            start: new Date(), // Set start date to now
            checkpointId: firstCheckpoint.id, // Set checkpointId to the first checkpoint
          },
        })

        return {
          success: true,
          code: '200',
          gameSession: updatedGameSession,
        }
      },
      join: async (action: GameSessionJoinAction) => {
        const { prisma, gameSessionId } = context
        const { userId } = action.payload

        if (!userId)
          return {
            success: false,
            code: '401',
            errors: ['User not authenticated'],
          }

        // Check if the user has purchased the game
        const gameSession = await prisma.gameSession.findUnique({
          where: { id: gameSessionId },
          include: {
            game: true, // Include game to check if user has purchased it
            participants: true, // Include current participants
          },
        })

        // If the game record doesn't exist, return a 404 error
        if (!gameSession) {
          return {
            success: false,
            code: '404',
            errors: ['Game record not found'],
          }
        }

        // Check if the user has purchased the game
        const hasPurchasedGame = await prisma.purchasedGames.findUnique({
          where: {
            userId_gameId: {
              userId: userId,
              gameId: gameSession.gameId,
            },
          },
        })

        // If the user hasn't purchased the game, return a 403 error
        if (!hasPurchasedGame) {
          return {
            success: false,
            code: '403',
            errors: ['You have not purchased this game'],
          }
        }

        // Check if there are less than 5 participants
        if (gameSession.participants.length >= 5) {
          return {
            success: false,
            code: '403',
            errors: ['Maximum number of participants reached'],
          }
        }

        if (gameSession.inviteCode !== action.payload.inviteCode) {
          return {
            success: false,
            code: '403',
            errors: ['Invalid invite code'],
          }
        }

        // Add the user as a participant
        const updatedGameSession = await prisma.gameSession.update({
          where: { id: gameSession.id },
          data: {
            participants: {
              connect: { id: userId }, // Connect the user to the participants
            },
          },
          // include: {
          //   participants: true, // Return the updated participants list
          // },
        })

        return {
          success: true,
          code: '200',
          gameSession: updatedGameSession,
        }
      },
    },
    WAY_TO_CHECKPOINT: {
      reachedCheckpoint: async (action: DispatchGameSessionAction) => {
        const { gameSessionId, prisma } = context
        const gameSession = await prisma.gameSession.findUnique({
          where: { id: gameSessionId },
          include: {
            game: {
              include: {
                checkpoints: true, // Include checkpoints for the game
              },
            },
          },
        })
        if (!gameSession) {
          return {
            success: false,
            code: '404',
            errors: ['Game record not found'],
          }
        }
        return new Promise((resolve) => {
          resolve({
            success: true,
            code: '200',
            gameSession: gameSession,
          })
        })
      },
    },
    CHECKPOINT: {
      answer: async (action: DispatchGameSessionAction) => {
        const { gameSessionId, prisma } = context
        const { checkpointId, answer } = action.payload

        const session = await prisma.gameSession.findUnique({
          where: {
            id: gameSessionId,
          },
        })
        if (!session)
          return {
            success: false,
            code: '404',
            errors: ['Game session not found'],
          }

        const { gameId } = session
        if (!checkpointId)
          return {
            success: false,
            code: '404',
            errors: ['Checkpoint ID not found'],
          }

        const checkpoint = await prisma.checkpoint.findUnique({
          where: {
            id: checkpointId,
            gameId: gameId,
          },
        })

        if (!checkpoint) {
          return {
            success: false,
            code: '404',
            errors: ['Checkpoint not found'],
          }
        }

        const isCorrect = (checkpoint?.answer as string[]).find(
          (_answer) => _answer.toLowerCase() === answer.toLowerCase(),
        )

        if (!isCorrect) {
          return {
            success: false,
            code: '403',
            errors: ['Invalid answer'],
          }
        }

        const updatedSession = await prisma.gameSession.update({
          where: {
            id: session.id,
          },
          data: {
            earnedPoints: session.earnedPoints + checkpoint.maxPoints,
          },
        })

        return {
          success: true,
          code: '200',
          gameSession: updatedSession,
        }
      },
      useHint: async (action: DispatchGameSessionAction) => {
        const { gameSessionId, prisma } = context
        const { checkpointId, hintId } = action.payload

        const session = await prisma.gameSession.findUnique({
          where: {
            id: gameSessionId,
          },
        })
        if (!session)
          return {
            success: false,
            code: '404',
            errors: ['Game session not found'],
          }

        const { gameId } = session
        if (!checkpointId)
          return {
            success: false,
            code: '404',
            errors: ['Checkpoint ID not found'],
          }

        const checkpoint = await prisma.checkpoint.findUnique({
          where: {
            id: checkpointId,
            gameId: gameId,
          },
        })

        if (!checkpoint) {
          return {
            success: false,
            code: '404',
            errors: ['Checkpoint not found'],
          }
        }

        const hint = await prisma.hint.findUnique({
          where: {
            id: hintId,
            checkpointId: checkpointId,
          },
        })

        if (!hint) {
          return {
            success: false,
            code: '404',
            errors: ['Hint not found'],
          }
        }

        const { hints = {} } = session
        if (!hints || typeof hints !== 'object' || Array.isArray(hints)) {
          return {
            success: false,
            code: '500',
            errors: ['Session.hints has invalid type'],
          }
        }

        const isUnrevealed = !Object.hasOwn(
          (hints[checkpointId] as Record<string, any>) ?? {},
          hintId,
        )

        if (isUnrevealed) {
          return {
            success: false,
            code: '403',
            errors: ['Hint already used'],
          }
        }

        const updatedSession = await prisma.gameSession.update({
          where: {
            id: session.id,
          },
          data: {
            hints: {
              [checkpointId]: {
                set: {
                  // @ts-ignore
                  ...hints[checkpointId],
                  [hintId]: true,
                },
              },
            },
          },
        })

        return {
          success: true,
          code: '200',
          gameSession: updatedSession,
        }
      },
    },
    FINISHED: {
      end: async (action: GameSessionEndAction) => {
        const { userId } = action.payload
        const { gameSessionId, prisma } = context
        if (!userId)
          return {
            success: false,
            code: '401',
            errors: ['User not authenticated'],
          }

        // Check if the user has purchased the game
        const gameSession = await prisma.gameSession.findUnique({
          where: { id: gameSessionId },
          include: {
            game: true, // Include game to check if user has purchased it
            participants: true, // Include current participants
          },
        })

        // If the game record doesn't exist, return a 404 error
        if (!gameSession) {
          return {
            success: false,
            code: '404',
            errors: ['Game record not found'],
          }
        }

        const isUserParticipant = gameSession.participants.some(
          (participant) => participant.id === userId,
        )
        if (!isUserParticipant) {
          return {
            success: false,
            code: '403',
            errors: ['User is not a participant'],
          }
        }

        const updatedGameSession = await prisma.gameSession.update({
          where: { id: gameSession.id },
          data: {
            state: 'FINISHED',
          },
        })

        return {
          success: true,
          code: '200',
          gameSession: updatedGameSession,
        }
      },
    },
    TIMEOUT: {},
  }

  return async (action: DispatchGameSessionAction) => {
    const { action: actionType } = action
    const state = states[currentState]

    if (!state) {
      return {
        success: false,
        code: '404',
        errors: ['State not found'],
      }
    }

    const actionHandler = state[actionType]

    if (!actionHandler) {
      return {
        success: false,
        code: '404',
        errors: ['Action not found'],
      }
    }

    return actionHandler(action)
  }
}

export class GameSessionManager {
  public gameSessionId: number
  private gameSession: GameSession
  private game: Game
  private checkpoints: Checkpoint[]
  private currentCheckpoint?: Checkpoint

  private mutex: Mutex = new Mutex()
  private notifier?: WebSocketHandler
  private _dispatch: (
    action: DispatchGameSessionAction,
  ) => Promise<DispatchGameSessionActionResponse>

  constructor(
    gs: GameSession,
    g: Game,
    cs: Checkpoint[],
    prisma: PrismaClient,
  ) {
    this.gameSessionId = gs.id
    this.gameSession = gs
    this.game = g
    this.checkpoints = cs.sort((a, b) => a.ordering - b.ordering) // change to ordering after the migration
    this.currentCheckpoint = gs.checkpointId
      ? this.checkpoints.find(
          (_checkpoint) => _checkpoint.id === gs.checkpointId,
        ) ?? this.checkpoints.shift()
      : this.checkpoints.shift()
    this._dispatch = initStateMachine('CREATED', {
      gameSessionId: gs.id,
      game: g,
      checkpoints: cs,
      prisma: prisma,
    })
  }

  private notify(message: string) {
    if (this.notifier) {
      this.notifier.sendMessageToGameSessionParticipants(
        this.gameSessionId,
        message,
      )
    }
  }

  public addNotifier(notifier: WebSocketHandler) {
    this.notifier = notifier
  }

  public async dispatch(
    action: DispatchGameSessionAction,
  ): Promise<DispatchGameSessionActionResponse> {
    await this.mutex.lock()
    try {
      const res = await this._dispatch(action)
      return res
    } catch (e: any) {
      return {
        success: false,
        code: '500',
      }
    } finally {
      this.mutex.unlock()
    }
  }
}
