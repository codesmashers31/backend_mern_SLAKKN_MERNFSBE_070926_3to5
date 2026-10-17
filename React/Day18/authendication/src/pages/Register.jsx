import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    
    const navigate = useNavigate()
    const [registerdata,setRegisterData] = useState({username:"",useremail:"",userpassword:""})
    

  const handleChange = (e)=>{

    setRegisterData({...registerdata,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e)=>{
     
   e.preventDefault()


   const getDatas = JSON.parse(localStorage.getItem("registerdatas")) || []
 
   const obj = {id:Date.now(),name:registerdata.username,email:registerdata.useremail,password:registerdata.userpassword}

   getDatas.push(obj)

   

   const convert = JSON.stringify(getDatas)

   localStorage.setItem("registerdatas",convert)

   alert("Successfully Register")

   setRegisterData({username:"",useremail:"",userpassword:""})
   
   navigate("/login")

  }


  return (
    <>
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-10 w-300 justify-center items-center">
        <input type="text" className="border w-100 p-1 h-10 rounded" placeholder="Enter the Name" onChange={handleChange} value={registerdata.username} name="username" />
        <input type="email" className="border w-100 p-1 h-10 rounded" placeholder="Enter the Email" onChange={handleChange} value={registerdata.useremail} name="useremail" />
        <input type="password" className="border w-100 p-1 h-10 rounded" placeholder="Enter the Password" onChange={handleChange} value={registerdata.userpassword} name="userpassword" />
        <input type="submit" className="bg-black text-white p-1 rounded w-20" value={"Register"} />
    </form>
    </>
  )
}

export default Register