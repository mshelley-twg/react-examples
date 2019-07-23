import { createContext } from 'react'

export const themes = {
  light: {
    section: {
      background: '#ffffff'
    },
    header: {
      color: '#000000'
    },
    button: {
      color: '#ffffff',
      background: '#00aa55'
    }
  },
  dark: {
    section: {
      background: '#000033'
    },
    header: {
      color: '#ffffff'
    },
    button: {
      color: '#000000',
      background: '#008800'
    }
  }
}

export const ThemeContext = createContext(themes.light)
