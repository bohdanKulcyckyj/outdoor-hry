import { Grid } from '@mui/material'
import React from 'react'
import GameCard from './GameCard'
import { BASE_API_URL } from '@/constants/routes'
import { GameDTO } from '@/types/Game'

type Props = {
  data: GameDTO[]
}

const GamesList = ({ data }: Props) => {
  return (
    <Grid container spacing={1} px={2}>
      {data?.map((_game: any) => (
        <Grid item xs={12} sm={6} lg={4} key={_game.id}>
          <GameCard
            {..._game}
            imageURL={BASE_API_URL + _game.image.path}
            rating={4.5}
            estimateTime='okolo 2 hodiny'
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default GamesList
