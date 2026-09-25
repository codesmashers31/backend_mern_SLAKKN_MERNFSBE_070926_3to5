

const Navbar = () => {
  return (
     
    <>
    <div className="nav">
        <div className="logo">
          Logo
        </div>
        <div className="link">
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
            <a href="http://">Help</a>

            <Button/>
        </div>
    </div>
    </>

  )
}

export default Navbar




export const Button = ()=>{



   return (<>
   
    <button className="btn">Click Me</button>
    

   </>)

}



export const List = ()=>{

    return (<>
   
    <ul>
        <li>This is Recat</li>
        <li>This is Node</li>
        <li>This is JS</li>
    </ul>

   </>)

}