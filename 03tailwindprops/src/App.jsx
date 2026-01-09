import { useState } from 'react'
import Card from './component/card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "nasrin",
    age: 24
  }
  let newarr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl' mb-4="true"> tailwinf test </h1>
      <Card username="chaiand code" btntext="clickme" />
      <Card username="nasrin" btntext="visitme"/>
    </>
  )
}

export default App
