import React from 'react'
import { AppBar, Box } from '@mui/material'

export default function Header({ children }: any) {
  return (
    <Box sx={{ flexGrow: 1, itemAlign: 'flex-start' }}>
      <AppBar position="static" sx={{ opacity: 0.8 }}>
        {children}
      </AppBar>
    </Box>
  )
}
