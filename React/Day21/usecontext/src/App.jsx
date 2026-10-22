import { useContext } from "react"
import NavBar from "./components/NavBar"
import ThemeContext from "./context/ThemeContext"


const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
  <>
  <div className={theme?"bg-black text-white p-2 h-100":"bg-white p-2 text-black h-100"}>
      <div>
        Logo
      </div>
   </div>

   <NavBar/>
  </>
  )
}

export default App
