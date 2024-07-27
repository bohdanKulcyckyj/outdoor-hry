import { api } from '@/constants/apiRoutes'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useGameTags = () => {
    const { data, error, isLoading } = useSWR(api.gameTags.list, fetcher)
 
    return {
      tags: data,
      isLoading,
      isError: error
    }
}