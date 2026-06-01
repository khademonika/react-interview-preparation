// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//  const [input, setInput] = useState("")
//  const [todo, setTodo] = useState([])
//  const handleClick = ()=>{
//   const newTodo = {
//     id:Date.now(),
//     text:input
//   }
//   setTodo([...todo, newTodo])
// setInput("")

// }
//   const handleDelete = (id) => {
//     const updated = todo.filter((todo, i) => i !== id)
//     setTodo(updated)
//     console.log();

//   }
//   return (
//     <div>
//       <div>
//         <h1>To do List</h1>
//         <button onClick={(e)=>handleClick(e)}>Add</button>
//       </div>
//       <div>
//         <input type="text" name="text" value={input} onChange={(e) => setInput(e.target.value)} id="" />
//       </div>
//       {
//         todo.map((val, i) => {
//           return <p key={val.id}>{val.text} <button className='text-5xl' onClick={() => handleDelete(i)}>X</button></p>
//         })
//       }
//     </div>
//   )
// }

// export default App
import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount]  = useState(0)
 useMemo(()=>{ for(let i = 0; i<10000000000; i++){
     125
  }},[])
  const handleClick = ()=>{
    setCount(count=>count+1)
  }
  return (
    <div>
     count: {count}
     <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default App


