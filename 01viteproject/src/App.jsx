import { useState } from 'react'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chai/>
      <p> Hello from App!</p>
    </>
  )
}

export default App
