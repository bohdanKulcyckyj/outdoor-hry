'use client'

import { GameDificultness } from '@/types/enums'
import { truncateText } from '@/utils/texts'
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Rating,
  Stack,
  Box,
  Chip
} from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { GameTag } from '@/types/Game'

type Props = {
  id: number
  title: string
  description: string
  place: string
  dificultness: GameDificultness
  imageURL: string
  price: string
  rating: number
  estimateTime: string
  tags: GameTag[]
}

const GameCard = ({
  id,
  title,
  description,
  place,
  dificultness,
  imageURL,
  price,
  rating,
  estimateTime,
  tags,
}: Props) => {
  console.log(imageURL)

  return (
    <Card>
      <CardActionArea>
        <Link href='/'>
          <CardMedia sx={{ height: 200, position: 'relative' }}>
            <Rating
              sx={{ position: 'absolute', top: '10px', left: '10px' }}
              value={rating}
              precision={0.5}
              size='small'
              readOnly
            />
            <Stack
              sx={{ position: 'absolute', bottom: '10px', left: '10px' }}
              direction='row'
              spacing={3}
            >
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
                gap={1}
              >
                <PlaceIcon color='primary' />
                <Typography color='white' variant='body2'>
                  {place}
                </Typography>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
                gap={1}
              >
                <AccessTimeFilledIcon color='primary' />
                <Typography color='white' variant='body2'>
                  {estimateTime}
                </Typography>
              </Box>
            </Stack>
            <Image
              src={imageURL}
              alt={title}
              priority
              width={200}
              height={260}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </CardMedia>
        </Link>
      </CardActionArea>
      <CardContent sx={{ height: 120 }}>
        <Stack direction='column'>
          <Link href='/'>
            <Typography gutterBottom variant='h6'>
              {truncateText(title, 20)}
            </Typography>
          </Link>
          <Typography gutterBottom variant='body2'>
            {truncateText(description, 80)}
          </Typography>
          <Box display='flex' gap={1} flexWrap='wrap' mt={2}>
            <Chip size="small" label='Pro děti' color='primary' />
            <Chip size="small" label='naučná' color='primary' />
          </Box>
        </Stack>
      </CardContent>
      <CardActions
        sx={{ height: 50, display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant='body1' color='blue'>
          {price} Kč
        </Typography>
        <Button variant='contained' onClick={(e) => e.stopPropagation()}>
          Koupit
        </Button>
      </CardActions>
    </Card>
  )
}

export default GameCard
