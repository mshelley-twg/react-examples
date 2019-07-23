import { createContext } from 'react'

export const theme = {
  button: {
    color: '#ffffff',
    background: '#008800'
  }
}

export const ThemeContext = createContext(theme)
