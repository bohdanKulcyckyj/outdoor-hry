export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL

const baseURL = (_resource: string) => `${BASE_API_URL}/${_resource}`

export const api = {
    games: {
        list: baseURL('games'),
        get: (slug: string) => baseURL(`games/${slug}`),
        put: baseURL('games/'),
        patch: (slug: string) => baseURL(`games/${slug}`),
        archive: (slug: string) => baseURL(`games/${slug}`)
    },
    gameTags: {
        list: baseURL('game-tags')
    }
}
