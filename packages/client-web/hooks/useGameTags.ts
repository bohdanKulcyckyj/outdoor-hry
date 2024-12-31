import { api } from '@/constants/apiRoutes'
import { GameTag } from '@/types/Game'
import useSWR from 'swr'

const fetcher = (...args: any) => fetch(...args).then(res => res.json())

export const useGameTags = () => {
    const { data = [], error, isLoading } = useSWR(api.gameTags.list, fetcher)
 
    return {
      tags: data as GameTag[],
      isLoading,
      isError: error
    }
}