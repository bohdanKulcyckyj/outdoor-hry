import {
  Box,
  Chip,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

type Props = {
  onFilterChange: (filterType: "search" | "tag") => void
}

const GameFilters = ({ onFilterChange }: Props) => {
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
          />
        </Box>
        <Box display='flex' gap={1} flexWrap='wrap'>
          <Chip label='Pro děti' color='primary' />
          <Chip label='18+' color='primary' variant='outlined' />
          <Chip label='příběhovka' color='primary' variant='outlined' />
          <Chip label='naučná' color='primary' variant='filled' />
          <Chip label='pro začátečníky' color='primary' variant='outlined' />
          <Chip label='pro pokročilé' color='primary' variant='outlined' />
        </Box>
      </Stack>
    </Paper>
  )
}

export default GameFilters
