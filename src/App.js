import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      {value}
      <button onClick={() => setValue(currentValue => currentValue + 1)}>Increment</button>
      <button onClick={() => setValue(currentValue => currentValue - 1)}>Decrement</button>
    </>
  )
}

function App () {
  return (
    <main>
      <Counter />
    </main>
  )
}

export default App
