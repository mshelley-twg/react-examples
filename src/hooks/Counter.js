import React, { useState } from 'react'

const Counter = () => {
  /**
   * We create local state with useState(), which receives a default value,
   * and returns an array of [value, setValue]. This way we can fetch the
   * current value, and later set that value.
   */
  const [value, setValue] = useState(0)

  /**
   * setValue() can either receive a new value or a function to set the
   * new value based on the current value. Below, we use functions to
   * increment or decrement the value of the counter.
   */
  return (
    <section>
      <h3>Counter: {value}</h3>
      <button onClick={() => setValue(currentValue => currentValue + 1)}>+</button>
      <button onClick={() => setValue(currentValue => currentValue - 1)}>-</button>
    </section>
  )
}

export default Counter
