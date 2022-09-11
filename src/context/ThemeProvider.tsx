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
  const webkitTextFillColor = theme === 'light' ? '#333' : '#FFF'

  document.body.style.color = color
  document.body.style.backgroundColor = backgroundColor
  document.body.style.webkitTextFillColor = webkitTextFillColor
  var all = document.getElementsByTagName('a')
  for (var i = 0, max = all.length; i < max; i++) {
    all[i].style.color = theme === 'light' ? 'blue' : 'orange'
  }

  return (
    <ThemeContextW.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextW.Provider>
  )
}
