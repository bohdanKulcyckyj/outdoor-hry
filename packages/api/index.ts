import express from 'express'
import cors from 'cors'
import path from 'path'
import rootRouter from './routes'
import { PrismaClient } from '@outdoor-game/data'
import { PORT } from './secrets'
import errorMiddleware from './middlewares/errors'
import { WebSocketHandler } from './utils/socket'
import { GameSessionManager } from './controllers/gameSessions/game-session-manager'

export const prisma = new PrismaClient({
  log: ['query'],
})
//.$extends({
//   query: {
//     user: {
//       create({ args, query }) {
//         args.data = signUpSchema.parse(args.data)
//         return query(args)
//       }
//     }
//   }
// })

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', rootRouter)

app.use(
  '/api/uploads/images',
  express.static(path.join(__dirname, 'uploads/images')),
)
app.use(
  '/api/uploads/contracts',
  express.static(path.join(__dirname, 'uploads/contracts')),
)

app.use(errorMiddleware)

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

export const socketHandler = new WebSocketHandler(server)
export const gameSessions: GameSessionManager[] = []
