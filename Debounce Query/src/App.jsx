import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [query, setQuery] = useState("")
  const [debounceQuery, setDebounceQuery] = useState("")

  useEffect(()=>{
    const timer = setInterval(() => {
     setDebounceQuery(query)
       
    },4000);
    return ()=>{
      clearInterval(timer)
    }
  },[query])
  useEffect(()=>{
    if(debounceQuery){
      console.log("Api is called for" , debounceQuery);
      
    }
  },[debounceQuery])
  return (
    <div>
<input type="search" placeholder='Search your todos here' value={query} onChange={(e)=>setQuery(e.target.value)} />

    </div>
  )
}

export default App
//need to solve again 