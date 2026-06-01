import React from 'react'

const Child = (props) => {
 
  return (
    <div>
  <button  onClick={() => props.increment(prev => prev + 1)}>Add</button>
    </div>
  )
}

export default Child
