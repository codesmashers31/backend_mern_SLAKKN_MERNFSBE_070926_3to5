import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (

<>

<div className=" shadow p-3 flex justify-between items-center ">

    <div className="flex gap-10 mx-15 ">
    <NavLink  to={"/"}>Home</NavLink>
    <NavLink  to={"/men"}>Men</NavLink>
    <NavLink  to={"/women"}>Women</NavLink>
    <NavLink  to={"/kids"}>Kids</NavLink>
        </div>
    <div className="mx-15">
        <a href="">All sports products Location 60012</a>
    </div>
</div>
</>
)
}

export default Navbar