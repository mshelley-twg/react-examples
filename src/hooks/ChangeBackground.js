import React, { useState, useEffect } from 'react'

const DEFAULT_BACKGROUND = '#ffffff'

const SetBackgroundButton = ({ background, children, setBackground }) => {
  return (
    <button onClick={() => setBackground(background)}>{children}</button>
  )
}

const ChangeBackground = () => {
  const [background, setBackground] = useState(DEFAULT_BACKGROUND)

  useEffect(() => {
    document.body.style.background = background

    return () => {
      document.body.style.background = DEFAULT_BACKGROUND
    }
  }, [background])

  return (
    <section>
      <h3>Change Background</h3>
      <SetBackgroundButton background='#ffffff' setBackground={setBackground}>White</SetBackgroundButton>
      <SetBackgroundButton background='#000000' setBackground={setBackground}>Black</SetBackgroundButton>
      <SetBackgroundButton background='#ff0000' setBackground={setBackground}>Red</SetBackgroundButton>
      <SetBackgroundButton background='#00ff00' setBackground={setBackground}>Green</SetBackgroundButton>
      <SetBackgroundButton background='#0000ff' setBackground={setBackground}>Blue</SetBackgroundButton>
    </section>
  )
}

export default ChangeBackground
