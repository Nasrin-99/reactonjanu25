import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, nasrinCount] = useState(17)

  // let counter = 15
  const addvalue = () => {
    //counter=counter+1;
    if(counter >=20){
      alert("its over baby stop");}
    else{
    nasrinCount(counter + 1)}
  }
  const removeValue = () => {
    if(counter <=0){
      alert("finish your number");
    }
    else{
    nasrinCount(counter - 1)
    }
  }

  return (
    <>
      <h1>chai and react </h1>
      <h2>counter value {counter}</h2>
      <button
        onClick={addvalue}
      > Add Value{counter}</button><br></br>
      <button
        onClick={removeValue}
      > decrise value {counter} </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
