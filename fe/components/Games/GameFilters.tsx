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
import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import { useGameTags } from '@/hooks/useGameTags'
import * as _ from 'lodash'

const TagSkeletons = () => {
  const tagWidths = _.times(10, () => _.random(50, 150 + 1))
  return tagWidths.map((_tag, _index) => (
    <Skeleton key={_index} variant='rounded' width={_tag} height={20} />
  ))
}

const GameFilters = () => {
  const [searchText, setSearchText] = useState('')
  const [activeTagIds, setActiveTagIds] = useState([] as number[])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { tags, isLoading, isError } = useGameTags()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleFilterByTag = (id: number) => {
    const ID = id.toString()
    const filteredTagsParam = searchParams.get('tags') ?? ''
    let filteredTagsArr = filteredTagsParam.split(',')
    if (filteredTagsArr.includes(ID)) {
      setActiveTagIds((prev) => prev.filter((_item) => _item !== id))
      filteredTagsArr = filteredTagsArr.filter((_item) => _item !== ID)
    } else {
      setActiveTagIds((prev) => [...prev, id])
      filteredTagsArr.push(ID)
    }
    router.push(
      `${pathname}?${createQueryString('tags', filteredTagsArr.join(','))}`,
    )
  }

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
            tags?.map((_item) => (
              <Chip
                key={_item.id}
                onClick={() => handleFilterByTag(_item.id)}
                label={_item.label}
                color='primary'
                variant={
                  activeTagIds.includes(_item.id) ? 'filled' : 'outlined'
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
