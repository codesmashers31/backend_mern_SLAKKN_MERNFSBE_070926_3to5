import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-amber-200  p-2 flex justify-between items-center">
        <div className="mx-15">
            Logo
        </div>
        <div className="mx-15 flex gap-15">
            <Link to={"/home"}>Home</Link>
            <Link to={"/"}>Regsiter</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar