import React from 'react'
import faqs from './data'
const App = () => {

  const handleDiv = ()=>{
    
  }
  return (
    <div>
 {faqs.map((element, index)=>{
  return <div>
    <p >{element.question}</p>
    <p style={{display:'none'}} onClick={handleDiv}>{element.answer}</p>
  </div>
 })}
 <div>

 </div>
    </div>
  )
}

export default App
