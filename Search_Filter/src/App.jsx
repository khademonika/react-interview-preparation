import React, { useState } from 'react'

const App = () => {
  const [type,setType] = useState("")
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
  return (
    <div>
      <input type="text" value={type} onChange={
        handleOnChange}  placeholder='Search here' />
     <div>
      {users.filter((val)=>
        val.toLowerCase().includes(type.toLowerCase())
      ).map((vl,i)=>{
        return <p>{vl}</p>
       })}
      <br />
     </div>
    </div>
  )
}

export default App
