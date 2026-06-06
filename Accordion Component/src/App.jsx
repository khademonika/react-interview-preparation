import React, { useState } from 'react'
import faqs from './data'
const App = () => {
const [open,setOpen] = useState(0)

  const handleDiv = (index)=>{
    setOpen(index)
  }
  return (
    <div>
 {faqs.map((element, index)=>{
  return <div>
    <p   onClick={()=>handleDiv(index)}>{element.question}</p>
    {open ==index?<p >{element.answer}</p>:""}
  </div>
 })}
 <div>
 </div>
    </div>
  )
}

export default App
