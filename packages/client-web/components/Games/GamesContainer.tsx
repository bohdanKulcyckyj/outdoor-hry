'use client'

import { TPagination } from '@/types/pagination'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import GameFilters from './GameFilters'
import GamesList from './GamesList'
import ItemsPagination from '../ItemsPagination'
import { useSession } from 'next-auth/react'

type Props = {
  paginatedData: TPagination
}

const GamesContainer = ({ paginatedData }: Props) => {
  const session = useSession()

  useEffect(() => {
    // @ts-ignore
    if (session?.data?.accessToken) {
      // @ts-ignore
      const socket = new WebSocket(
        `ws://localhost:4000?token=${session.data.accessToken}&game-record-id=1`,
      )

      socket.addEventListener('close', (message) =>
        console.log('socket closed', message),
      )
      socket.addEventListener('open', () => {
        socket.send("Hello there")
        console.log('Connected to WebSocket server')
      })
      socket.addEventListener('message', (message) => console.log(JSON.parse(message.data)))
    }
  }, [session])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <GameFilters />
      </Grid>
      <Grid item xs={12} md={9}>
        <GamesList data={paginatedData?.data ?? []} />

        {paginatedData?.lastPage > 1 && (
          <Box display='flex' justifyContent='center' pt={3} pb={6}>
            <ItemsPagination paginationData={paginatedData} />
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default GamesContainer
