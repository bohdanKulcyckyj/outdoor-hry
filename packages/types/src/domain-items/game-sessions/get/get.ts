export type GameSessionGetResponse<TGameSession> = GameSessionGetResponseSuccess<TGameSession> | GameSessionGetResponseError

export type GameSessionGetResponseError = {
    code: string
    message: string
    success: false
    errors: string[]
}

export type GameSessionGetResponseSuccess<TGameSession> = {
    code: string
    message: string
    success: true
    gameSession: TGameSession
}
