'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export default Provider
