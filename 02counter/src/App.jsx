import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setcounter] = useState(0)
 // let counter = 5
  const addValue = () => {
    // counter = counter + 1
    // console.log('clicked', counter);
    if(counter < 20){
    setcounter(counter =counter+1)
    // setcounter(counter => counter + 1)
    // setcounter(counter => counter + 1)
    // setcounter(counter => counter + 1)
    // setcounter(counter => counter + 1)
    }else{
      alert('limit reach')
    }
    }
  
  const removeValue = () => {
    if(counter > 0){
    setcounter(counter - 1)
    }else{
      alert('limit reach')
    }
  }
  

  return (
    <>
      <h1>syed Ryan</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >add value{counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
