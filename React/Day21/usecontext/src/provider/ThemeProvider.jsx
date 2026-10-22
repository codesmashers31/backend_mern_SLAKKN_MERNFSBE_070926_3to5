import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {


 const [theme,setTheme] = useState(true)

 const handelThemeChange = ()=>{

    setTheme(!theme)

 }



  return (
    <>
    <ThemeContext.Provider value={{theme,handelThemeChange}}>
        {children}
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
