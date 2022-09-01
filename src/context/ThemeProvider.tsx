import React from 'react'
import { createContext, useState } from 'react'
import { ThemeContext, Theme } from '../types'

export const ThemeContextW = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const color = theme === 'light' ? '#333' : '#FFF'
  const backgroundColor = theme === 'light' ? '#FFF' : '#333'

  document.body.style.color = color
  document.body.style.backgroundColor = backgroundColor

  return (
    <ThemeContextW.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextW.Provider>
  )
}
