import GamesContainer from '@/components/Games/GamesContainer'
import { GAMES } from '@/constants/routes'
import {
  Box,
} from '@mui/material'
import React from 'react'

const getData = async () => {
  const res = await fetch(GAMES)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const GamesListPage = async () => {
  const paginatedData = await getData()

  return (
    <Box>
      <GamesContainer paginatedData={paginatedData} />
    </Box>
  )
}

export default GamesListPage
