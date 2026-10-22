import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const NavBar = () => {

  const {theme,handelThemeChange} = useContext(ThemeContext)

  return (
   <>
   <div className={theme?"bg-black text-white p-2":"bg-white p-2 text-black"}>
      <div>
        Logo
      </div>
   </div>
   <button onClick={handelThemeChange}>{theme?"Light":"Dark"}</button>
   </>
  )
}

export default NavBar
