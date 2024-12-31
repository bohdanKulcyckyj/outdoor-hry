import { answer } from './answer'
import { create } from './create'
import { end } from './end'
import { join } from './join'
import { leave } from './leave'
import { reachedCheckpoint } from './reachedCheckpoint'
import { start } from './start'
import { useHint } from './useHint'

const GameSessionsController = {
  create,
  join,
  leave,
  start,
  answer,
  useHint,
  reachedCheckpoint,
  end,
  get
}

export default GameSessionsController
