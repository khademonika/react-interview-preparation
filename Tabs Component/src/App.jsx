import React, { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const App = () => {
  const [activeTab, setActiveTab] = useState("Tab1")
const tabs = ["Tab1","Tab2","Tab3" ]
const tabComponent = {
  Tab1 : <Tab1/>,
  Tab2 : <Tab2/>,
  Tab3 : <Tab3/>,
}
  return (
    <div>
      {tabComponent[activeTab]}
      {tabs.map((tab,i)=>{
        return <button onClick={()=>setActiveTab(tab)}>{tab}</button>
      })}
    
    </div>
  )
}

export default App
