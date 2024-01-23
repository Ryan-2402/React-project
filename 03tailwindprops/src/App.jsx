import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username :'riyan',
    age : 24

  }
  let newArr = [1, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
      <Card username='ryan' btntext="click me" />
      <Card username='syed' btntext='vist me' />
     

    </>
  )
}

export default App
