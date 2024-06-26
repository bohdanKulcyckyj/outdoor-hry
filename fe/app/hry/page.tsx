import GamesContainer from '@/components/Games/GamesContainer'
import { GAMES } from '@/constants/routes'
import { normalizeParams } from '@/utils/url'
import { PageProps, PageSearchParams } from '@/types/next'
import { Box } from '@mui/material'
import React from 'react'

const getData = async (params: PageSearchParams) => {
  const normalizedParams = normalizeParams(params)
  const query = new URLSearchParams(normalizedParams).toString()
  const url = `${GAMES}?${query}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data from url' + url)
  }

  return res.json()
}

const GamesListPage = async ({ searchParams }: PageProps) => {
  const paginatedData = await getData(searchParams)

  return (
    <Box>
      <GamesContainer paginatedData={paginatedData} />
    </Box>
  )
}

export default GamesListPage
