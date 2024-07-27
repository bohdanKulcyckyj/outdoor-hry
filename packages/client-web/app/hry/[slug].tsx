import { api } from '@/constants/apiRoutes'
import { Box, Typography } from '@mui/material'
import { normalizeParams } from '@/utils/url'
import React from 'react'
import { PageSearchParams } from '@/types/next'

const getData = async (params: PageSearchParams) => {
    const normalizedParams = normalizeParams(params)
    const query = new URLSearchParams(normalizedParams).toString()
    const { slug } = query
    const url = `${api.games.list}?${query}`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch data from url' + url)
    }
  
    return res.json()
}

const GameDetailPage = () => {
  return (
    <Box>
        <Typography></Typography>
    </Box>
  )
}

export default GameDetailPage