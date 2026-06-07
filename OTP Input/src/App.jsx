import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {
  const [otp,setOtp] = useState(["","","",""])
  const inputRef = useRef([])

  const handleClick = ()=>{
    
  }
  return (
    <div>
      {
        otp.map((val,index)=>{
        return <input key={index} ref={(el)=>(inputRef.current[index] = el)} type="text" maxLength={1}
         onChange={()=>inputRef.current[index + 1]?.focus()} />
        })
      }
    {inputRef.current.values}
    </div>
  )
}

export default App
