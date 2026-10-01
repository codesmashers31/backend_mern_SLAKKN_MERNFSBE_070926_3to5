
import { useLocation, useNavigate } from "react-router-dom"
const LinkNav = () => {
     const navigate = useNavigate()

     const location = useLocation()

     console.log(location.pathname);
     

 const handleClick = ()=>{

  navigate("/login",{state:{name:"Recat",course:"Js"}})


 }
  return (
    <>
    <button onClick={handleClick}>Click to Move</button>
    </>
  )
}

export default LinkNav