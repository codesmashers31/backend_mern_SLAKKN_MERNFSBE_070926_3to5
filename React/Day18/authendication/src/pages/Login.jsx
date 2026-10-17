import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
    
    const navigate = useNavigate()
    const [logindata,setloginData] = useState({useremail:"",userpassword:""})
    

  const handleChange = (e)=>{

    setloginData({...logindata,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e)=>{
     
   e.preventDefault()


   const getDatas = JSON.parse(localStorage.getItem("registerdatas"))
   
   if(!getDatas){
    alert("Your Not valid user")
    navigate("/")
    return
    
   }

   const checkUser = getDatas.find((e)=>e.email==logindata.useremail && e.password == logindata.userpassword)

   //console.log(checkUser);
   
   if(!checkUser || checkUser == null || checkUser ==""){

    alert('Your Not a Valid User Please Register')
    return
      
   }

   localStorage.setItem("isActiveuser",JSON.stringify(checkUser))

   setloginData({useremail:"",userpassword:""})

   navigate("/home")

  }


  return (
    <>
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-10 w-300 justify-center items-center">
        <input type="email" className="border w-100 p-1 h-10 rounded" placeholder="Enter the Email" onChange={handleChange} value={logindata.useremail} name="useremail" />
        <input type="password" className="border w-100 p-1 h-10 rounded" placeholder="Enter the Password" onChange={handleChange} value={logindata.userpassword} name="userpassword" />
        <input type="submit" className="bg-black text-white p-1 rounded w-20" value={"login"} />
    </form>
    </>
  )
}

export default Login