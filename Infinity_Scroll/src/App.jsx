import React, { useEffect, useState } from 'react'
import products from './Data'
// need to improve the logic
const App = () => {
  const [visibleProduct, setVisibleProduct]  =useState(products.slice(0,10))
  const windowlength = window.scrollY
  const handleScroller = ()=>{
   if( window.innerHeight+ window.scrollY >= 
    document.documentElement.scrollHeight){
      console.log("Reached Bottom");
    setVisibleProduct(products.slice(0, visibleProduct.length+10))
console.log(visibleProduct.length+10);

      
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroller)
    return ()=>{
      window.removeEventListener("scroll", handleScroller)
    }
    
  })
  return (
    <div>
      {
        visibleProduct.map((val,index)=>{
          return <div key={index}
           style={{
        border: "1px solid black",
        padding: "50px",
        margin: "10px",
      }}>
            {val.name}
          </div>
        })
      }
    </div>
  )
}

export default App
