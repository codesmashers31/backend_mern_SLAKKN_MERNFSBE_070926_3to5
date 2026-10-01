import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <NavLink to={"/"}  className={({isActive})=>isActive?"bg-amber-200 p-1":""}>Home</NavLink>
    <NavLink to={"/login"} className={({isActive})=>isActive?"bg-blue-200 p-1":""}>Login</NavLink>
 
    </>
  )
}

export default NavBar