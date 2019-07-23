import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <section>
      <h3>Counter: {value}</h3>
      <button onClick={() => setValue(currentValue => currentValue + 1)}>+</button>
      <button onClick={() => setValue(currentValue => currentValue - 1)}>-</button>
    </section>
  )
}

export default Counter
