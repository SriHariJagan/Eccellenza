
import React from 'react'
import { ThemeProvider } from './Context/ThemeProvider'

const Store = ({children}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default Store