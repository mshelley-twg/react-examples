import { createContext } from 'react'

/**
 * We specify light and dark themes, both of which provide component styles.
 * If the light theme is selected, we use the light theme styles.
 * If the dark theme is selected, we use the dark theme styles.
 */
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

/**
 * We create the ThemeContext with a default theme and toggleTheme method.
 * While it is sufficient to provide just the default theme, we include
 * toggleTheme() so we can change the theme just as easily as we fetch it.
 */
export const ThemeContext = createContext({
  theme: themes.light,
  // To be provided with ThemeContext.Provider
  toggleTheme: () => {}
})
