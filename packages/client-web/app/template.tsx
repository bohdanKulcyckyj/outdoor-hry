"use client"

import { useTheme } from '@emotion/react'
import { Box, Container } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Template = ({ children }: Props) => {
  const theme = useTheme()

  return (
    <Container component='main' maxWidth='xl'>
      <Box
        sx={{
          mt: 16,
          minHeight: '90vh',
          [theme.breakpoints.up('md')]: {
            px: 4,
          },
        }}
      >
        {children}
      </Box>
    </Container>
  )
}

export default Template
