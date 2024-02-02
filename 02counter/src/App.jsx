import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

  //let counter = 15

  const addValue = () => {
    if(counter < 20){
    counter = counter + 1
    }
    setCounter(counter)
    //console.log("clicked", counter);
  }

  const removeValue = () => {
    if(counter != 0){
    setCounter(counter -1)
    }
  }
  return (
    <>
      <h1>Vite React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick = {addValue}>Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
