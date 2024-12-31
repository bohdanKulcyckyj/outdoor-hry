import WebSocket from 'ws'
import { JWT_SECRET } from '../secrets'
import { IncomingMessage, Server } from 'http'
import * as jwt from 'jsonwebtoken'
import url from 'url'
import { InternalException } from '../exceptions/internal'
import { ErrorCode } from '../exceptions/root'

export type ConnectedClient = {
  socket: WebSocket
  userId: number
  gameSessionId: number
}

export class WebSocketHandler {
  private wss: WebSocket.Server
  private clients: ConnectedClient[] = []

  constructor(server: Server) {
    this.wss = new WebSocket.Server({ server })
    this.wss.on('connection', (ws: WebSocket, req: IncomingMessage) =>
      this.handleConnection(ws, req),
    )
  }

  private handleConnection(ws: WebSocket, req: IncomingMessage) {
    try {
      console.log('connection starts')
      const query = req.url?.replace('/?', '').split('&') ?? []
      console.log(query)
      const token = query[0].replace('token=', '')
      const gameSessionId = query[1].replace('game-record-id=', '')
      console.log(gameSessionId)
      const payload = jwt.verify(String(token), JWT_SECRET) as any
      console.log(payload)
      const { userId } = payload

      console.log('==============')
      console.log('token')
      console.log(token)
      console.log('gameSessionId')
      console.log(gameSessionId)
      console.log('userId')
      console.log(userId)

      if (!token) {
        ws.close(4001, 'No token provided')
        return
      }

      if (!gameSessionId) {
        ws.close(4002, 'No record id specified')
        return
      }

      if (!userId) {
        ws.close(4003, 'Token contains invalid id')
        return
      }

      this.clients.push({
        socket: ws,
        userId,
        gameSessionId: parseInt(gameSessionId),
      })

      ws.send(JSON.stringify({ data: 'my data', action: 'bruh' }))

      ws.on('message', (message: string) =>
        this.handleRecieveMessage(ws, message),
      )
      ws.on('close', () => this.handleClose(ws))
    } catch (e: any) {
      console.log(e)
      ws.close(4002, 'Invalid token')
      return
    }
  }

  private handleSendMessage(ws: WebSocket, message: string) {
    ws.send(message)
  }

  public sendMessageToUser(userId: number, message: string) {
    const client = this.clients.find((_client) => _client.userId === userId)
    if (!client)
      throw new InternalException(
        'User not found',
        ErrorCode.USER_NOT_FOUND,
        null,
      )

    this.handleSendMessage(client.socket, message)
  }

  public sendMessageToGameSessionParticipants(
    gameSessionId: number,
    message: string,
  ) {
    const clients = this.clients.filter(
      (_client) => _client.gameSessionId === gameSessionId,
    )
    clients.forEach((client) => this.handleSendMessage(client.socket, message))
  }

  private handleRecieveMessage(ws: WebSocket, message: string) {
    const currClient = this.clients.find((_client) => _client.socket === ws)
    if (!currClient) return

    console.log('Recieved message from ' + currClient.userId + ' : ' + message)
  }

  private handleClose(ws: WebSocket) {
    this.clients = [...this.clients.filter((_client) => _client.socket !== ws)]
  }
}
