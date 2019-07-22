import React, { useState } from 'react'

const Button = () => {
  const [value, setValue] = useState(0)

  return (
    <button onClick={() => setValue(currentValue => currentValue + 1)}>{value}</button>
  )
}

function App () {
  return (
    <main>
      <Button />
    </main>
  )
}

export default App
