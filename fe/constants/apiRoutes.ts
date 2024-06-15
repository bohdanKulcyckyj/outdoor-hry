export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL

const apiURL = (par: string) => `${BASE_API_URL}/${par}`

export const GAMES = apiURL('games')
export const GAME_TAGS = apiURL('game-tags')
