import React, { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [type,setType] = useState("")
  const [debounceQuery,setDebounceQuery] = useState("")
  const [result, setResult] = useState([])

const users = [
  "Monika Khade",
  "Rahul Sharma",
  "Priya Patel",
  "Amit Verma",
  "Sneha Gupta",
  "Rohan Singh",
  "Anjali Mishra",
  "Vikas Yadav",
  "Neha Jain",
  "Arjun Mehta",
  "Pooja Soni",
  "Karan Malhotra",
  "Nisha Agarwal",
  "Aditya Joshi",
  "Simran Kaur"
];
const handleOnChange = (e)=>{
  console.log(e.target.value);

  setType(e.target.value)
  
}
//Adding debounce query
useEffect(()=>{
  const intervalId = setTimeout(() => {
    setDebounceQuery(type)
  }, 500);
  return ()=>{
    clearTimeout(intervalId)
  }
},[type])
// useEffect(()=>{
//   if(debounceQuery){
//   const results =  users.filter((val)=>
//         val.toLowerCase().includes(debounceQuery.toLowerCase()))
//   console.log(results);
//   setResult(results)
//   }
//   if(type.length == 0){
//     setResult([])
//   }
  
// },[debounceQuery])
const filteredUser = users.filter((val)=>val.toLowerCase().includes(debounceQuery.toLowerCase()))
  return (
    <div>
      <input type="text" value={type} onChange={handleOnChange}  placeholder='Search here' />
     <div>
{
  debounceQuery? filteredUser.map((val,i)=>{
   return <p key={i}>{val}</p>
  }): users.map((val,i)=>{
  return  <p key={i}>{val}</p>
  })
}
      <br />
     </div>
    </div>
  )
}

export default App
