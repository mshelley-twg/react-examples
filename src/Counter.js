import React, { useState } from 'react'

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

export default Counter
