import React, { useState } from 'react'
import { ThemeContext, themes } from './theme-context'

const Section = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <section style={theme.section}>{children}</section>
    )}
  </ThemeContext.Consumer>
)

const Header = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <h2 style={theme.header}>{children}</h2>
    )}
  </ThemeContext.Consumer>
)

const Button = ({ children, onClick }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <button style={theme.button} onClick={onClick}>{children}</button>
    )}
  </ThemeContext.Consumer>
)

const ToggleThemeButton = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <Button onClick={toggleTheme}>Toggle Day / Night Theme</Button>
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
      <Section>
        <Header>Context</Header>
        <ToggleThemeButton />
      </Section>
    </ThemeContext.Provider>
  )
}

export default ContextExample
