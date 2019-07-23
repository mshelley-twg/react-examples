import React, { useState, useEffect } from 'react'

const DEFAULT_BACKGROUND = '#ffffff'

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <section>
      <h2>Counter: {value}</h2>
      <button onClick={() => setValue(currentValue => currentValue + 1)}>Increment</button>
      <button onClick={() => setValue(currentValue => currentValue - 1)}>Decrement</button>
    </section>
  )
}

const BackgroundButton = ({ background, children, setBackground }) => {
  return (
    <button onClick={() => setBackground(background)}>{children}</button>
  )
}

const BackgroundChanger = () => {
  const [background, setBackground] = useState(DEFAULT_BACKGROUND)

  useEffect(() => {
    document.body.style.background = background

    return () => {
      document.body.style.background = DEFAULT_BACKGROUND
    }
  }, [background])

  return (
    <section>
      <h2>Change Background</h2>
      <BackgroundButton background='#ffffff' setBackground={setBackground}>White</BackgroundButton>
      <BackgroundButton background='#000000' setBackground={setBackground}>Black</BackgroundButton>
      <BackgroundButton background='#ff0000' setBackground={setBackground}>Red</BackgroundButton>
      <BackgroundButton background='#00ff00' setBackground={setBackground}>Green</BackgroundButton>
      <BackgroundButton background='#0000ff' setBackground={setBackground}>Blue</BackgroundButton>
    </section>
  )
}

function App () {
  return (
    <main>
      <Counter />
      <BackgroundChanger />
    </main>
  )
}

export default App
