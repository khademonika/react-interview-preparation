import React, { useState } from 'react'
import Modal from './Modal'

const App = () => {
  const [openModel , setOpenModel]  =useState(false)
  const onClose = ()=>{
    setOpenModel(false)
  }
  return (
    <div  className="container">
      <button   className="open-btn" onClick={()=>setOpenModel(true)}>Open</button>
      {openModel && <Modal onClose={onClose}/>}
    </div>
  )
}

export default App
