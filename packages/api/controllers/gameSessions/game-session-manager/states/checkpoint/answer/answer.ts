import { DispatchGameSessionAction, StateMachineContext } from "../../../types"


export default async function answer(context: StateMachineContext, action: DispatchGameSessionAction) {
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
  }