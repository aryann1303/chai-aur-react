import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css'


function App() {
  const [length , setLength] = useState(8)
  const [password , setPassword] = useState("")
  const [NumbersAllowed , setNumbersAllowed] = useState("False") 
  const [CharAllowed , setCharAllowed] = useState("False")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(NumbersAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*(){}~`"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random()*str.length) + 1
      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [NumbersAllowed , CharAllowed , length , setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    
     // passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
      passwordGenerator()
  },[length, NumbersAllowed, CharAllowed, passwordGenerator])
    


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
           value={password}
           className = "outline-none w-full py-1 px-3" 
           placeholder='Password'
           readOnly
           ref = {passwordRef}
           />
           <button 
          onClick={copyPasswordToClipboard}
           className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2' >
          <div className='flex item-center gap-x-2'>
            <input type="range"
            className='cursor-pointer'
            min={7}
            max={100}
         //   value={length}
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {NumbersAllowed}
              id = "numberinput"
              onChange = {()=>{setNumbersAllowed((prev)=>!prev)}} 
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {CharAllowed}
              id = "characterinput"
              onChange = {()=>{setCharAllowed((prev)=>!prev)}} 
              />
              <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
