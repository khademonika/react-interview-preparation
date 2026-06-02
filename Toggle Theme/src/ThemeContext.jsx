import { createContext, useState } from "react";



export const ThemeContext = createContext() // creates an empty box ThemeContext = {}

export const ThemeProvider = ({children})=>{
const [theme,setTheme]  = useState("light")
//Provider is simply means "Everything inside me can use this data."
    return <ThemeContext.Provider value={{theme,setTheme}}> 
        {children}
    </ThemeContext.Provider>
}