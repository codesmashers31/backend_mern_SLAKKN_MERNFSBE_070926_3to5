import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-blue-300 p-3 flex justify-between items-center">
        <div className="mx-10">
          <h3>LOGO</h3>
        </div>
        <div className="mx-10 flex items-center gap-10">
           <Link to="/" >Home</Link>
          
           <NavLink to={"/about"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>About</NavLink>
           <NavLink to={"/contact"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>Contact</NavLink>
           <NavLink to={"/help"} className={({isActive})=>isActive ? "bg-amber-200 p-1 rounded text-center":""}>Help</NavLink>
            
           <Link to={"/login"}>Login</Link>
           <Link to={"/register"}>Register</Link>

        </div>
    </div>
    </>
  )
}

export default NavBar