import React, { useState } from 'react'
import { ThemeContext, themes } from './theme-context'

const ThemeSection = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <section style={theme.section}>{children}</section>
    )}
  </ThemeContext.Consumer>
)

const ThemeHeader = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <h2 style={theme.header}>{children}</h2>
    )}
  </ThemeContext.Consumer>
)

const ThemeButton = ({ children, onClick }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <button style={theme.button} onClick={onClick}>{children}</button>
    )}
  </ThemeContext.Consumer>
)

const ToggleThemeButton = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <ThemeButton onClick={toggleTheme}>Toggle Day / Night Theme</ThemeButton>
    )}
  </ThemeContext.Consumer>
)

function ContextExample () {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme => theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSection>
        <ThemeHeader>Context</ThemeHeader>
        <ToggleThemeButton />
      </ThemeSection>
    </ThemeContext.Provider>
  )
}

export default ContextExample
