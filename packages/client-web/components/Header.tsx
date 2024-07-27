'use client'
import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  Drawer,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@emotion/react'
import Link from 'next/link'

const Header = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  const theme = useTheme()
  // @ts-ignore
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = (state: boolean): void => {
    setIsDrawerOpened(state)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Container maxWidth='xl'>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            py={1}
            sx={{
              [theme.breakpoints.up('md')]: {
                px: 4,
              },
            }}
          >
            <Typography variant='h4'>Outdoor Hry</Typography>
            {isMatch ? (
              <>
                <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={() => toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  open={isDrawerOpened}
                  onClose={() => toggleDrawer(false)}
                  PaperProps={{
                    sx: { width: '100%' },
                  }}
                >
                  <Stack direction='column' spacing={3}>
                    <Box
                      display='flex'
                      alignItems='center'
                      justifyContent='flex-end'
                    >
                      <IconButton
                        edge='start'
                        color='error'
                        aria-label='menu'
                        onClick={() => toggleDrawer(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Button color='secondary' variant='text'>
                      <Link href='/'>Domu</Link>
                    </Button>
                    <Button color='secondary' variant='text'>
                      <Link href='/hry'>Vyberte hru</Link>
                    </Button>
                    <Button color='secondary' variant='text'>
                      <Link href='/prihlaseni'>Přihlásit se</Link>
                    </Button>
                  </Stack>
                </Drawer>
              </>
            ) : (
              <Stack direction='row' spacing={2}>
                <Button color='secondary' variant='text'>
                  <Link href='/'>Domu</Link>
                </Button>
                <Button color='secondary' variant='text'>
                  <Link href='/hry'>Vyberte hru</Link>
                </Button>
                <Button color='secondary' variant='text'>
                  <Link href='/prihlaseni'>Přihlásit se</Link>
                </Button>
              </Stack>
            )}
          </Box>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
