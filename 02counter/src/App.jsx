import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5;

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
    
  }
  

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>decrease Value</button>
    </>
  )
}

export default App
