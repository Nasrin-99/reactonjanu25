import { useState, useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [Password, setpassword] = useState("")
  // used ref hook
  const passwordRef = useRef(null)



  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) { str += "0123456789" }
    if (charallowed) { str += "~!@#$%^&*()`_+=-[]{}\|';:/?.,>,<" }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])

  const copyPasswordToClipbord =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{
    PasswordGenerator()
  },[length,numberallowed,charallowed,PasswordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-700 '>
        <h1 className='text-white text-center my-3'> Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-7'>
          <input
            type='text'
            value={Password}
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly 
            ref={passwordRef}
            />
          <button
            className='outline-non bg-blue-700
           text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipbord}
            //?
            >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label> Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberallowed}
              id="numberInpur"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'> Number </label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charallowed}
              id="charInpur"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'> Characters </label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
