'use client'
import {
  Box,
  Chip,
  InputAdornment,
  Paper,
  Skeleton,
  Stack,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import { useGameTags } from '@/hooks/useGameTags'
import { times, random } from 'lodash'
import { GameTag } from '@/types/Game'

const TagSkeletons = () => {
  const tagWidths = times(10, () => random(50, 150 + 1))
  return tagWidths.map((_tag, _index) => (
    <Skeleton key={_index} variant='rounded' width={_tag} height={20} />
  ))
}

const GameFilters = () => {
  const [searchText, setSearchText] = useState('')
  const [activeTagIds, setActiveTagIds] = useState([] as string[])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { tags, isLoading, isError } = useGameTags()

  console.log(tags)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const extractActiveIds = () => {
    const filterTagsParam = searchParams.get('tags')
    return filterTagsParam ? filterTagsParam.split(',') : []
  }

  const handleFilterByTag = (ID: string) => {
    let filterTagsArr = activeTagIds
    console.log(filterTagsArr)
    if (filterTagsArr.includes(ID)) {
      setActiveTagIds((prev) => prev.filter((_item) => _item !== ID))
      filterTagsArr = filterTagsArr.filter((_item) => _item !== ID)
    } else {
      setActiveTagIds((prev) => [...prev, ID])
      filterTagsArr.push(ID)
    }
    if (filterTagsArr.length > 0) {
      return router.push(
        `${pathname}?${createQueryString('tags', filterTagsArr.join(','))}`,
      )
    }

    return router.push(pathname)
  }

  useEffect(() => {
    const filterTags = extractActiveIds()
      .filter((_item) => {
        try {
          const res = parseInt(_item)
          return true
        } catch (e) {
          return false
        }
      })
      .filter((_item) => _item !== undefined)
    setActiveTagIds(() => [...filterTags])
  }, [])

  return (
    <Paper elevation={3}>
      <Stack direction='column' p={2}>
        <Box mb={4}>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            sx={{ width: '100%' }}
            label='Vyhledat hru'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={searchText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const newValue = event.target.value
              setSearchText(newValue)
              router.replace(
                `${pathname}?${createQueryString('search', newValue)}`,
              )
            }}
          />
        </Box>
        <Box display='flex' gap={1} flexWrap='wrap'>
          {isLoading ? (
            <TagSkeletons />
          ) : (
            tags?.map((_item: GameTag) => (
              <Chip
                key={_item.id}
                onClick={() => handleFilterByTag(_item.id.toString())}
                label={_item.label}
                color='primary'
                variant={
                  activeTagIds.includes(_item.id.toString()) ? 'filled' : 'outlined'
                }
              />
            ))
          )}
        </Box>
      </Stack>
    </Paper>
  )
}

export default GameFilters
