import React, { useState } from 'react'
import { ThemeContext, themes } from './theme-context'

const ThemeButton = ({ children, onClick }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button style={theme.button} onClick={onClick}>{children}</button>
    )}
  </ThemeContext.Consumer>
)

function ContextExample () {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme => theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Consumer>
        {theme => (
          <section style={theme.example}>
            <h2 style={theme.header}>Context</h2>
            <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
          </section>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  )
}

export default ContextExample
