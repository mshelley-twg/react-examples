import React, { useState } from 'react'
import { ThemeContext, themes } from './theme-context'

/**
 * With ThemeContext.Consumer, we receive the value provided by
 * ThemeContext.Provider. In our case, we receive { theme, toggleTheme }.
 * Thanks to context, we no longer need to feed props down the hierarchy.
 */
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
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    )}
  </ThemeContext.Consumer>
)

function ContextExample () {
  const [theme, setTheme] = useState(themes.light)

  /*
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(theme => theme === themes.light ? themes.dark : themes.light)
  }

  /**
   * We must pass a value to ThemeContext.Provide in order for our consumers
   * to have access to those values. Here, we treat ContextExample as the
   * holder and setter of our "global" theme variables.
   *
   * By providing { theme, toggleTheme } we can later get and set the theme
   * through our consumers.
   */
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
