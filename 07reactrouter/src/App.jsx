import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
      
    </>
  )
}

export default App
