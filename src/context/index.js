import React from 'react'
import { ThemeContext, theme } from './theme-context'

const ThemeButton = ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button style={theme.button}>{children}</button>
    )}
  </ThemeContext.Consumer>
)

function ContextExample () {
  return (
    <section>
      <h2>Context</h2>
      <ThemeContext.Provider value={theme}>
        <ThemeButton>Button</ThemeButton>
      </ThemeContext.Provider>
    </section>
  )
}

export default ContextExample
