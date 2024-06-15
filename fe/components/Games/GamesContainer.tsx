'use client'

import { TPagination } from '@/types/pagination'
import { Box, Grid } from '@mui/material'
import React from 'react'
import GameFilters from './GameFilters'
import GamesList from './GamesList'
import ItemsPagination from '../ItemsPagination'

type Props = {
  paginatedData: TPagination
}

const GamesContainer = ({ paginatedData }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <GameFilters />
      </Grid>
      <Grid item xs={12} md={9}>
        {/* Game Cards */}
        <GamesList data={paginatedData?.data ?? []} />
        {/* Pagination */}
        <Box display='flex' justifyContent='center' pt={3} pb={6}>
            <ItemsPagination />
        </Box>
      </Grid>
    </Grid>
  )
}

export default GamesContainer
