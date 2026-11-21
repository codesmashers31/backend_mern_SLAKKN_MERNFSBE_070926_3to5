import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [mydatas,setMydatas] = useState({useremail:"",userpassword:""})
  
  const navigate = useNavigate()
  const handleChange = (e) => {


    setMydatas((p)=>({...p,[e.target.name]:e.target.value}))
    
  };


  const handleSubmit = async(e)=>{

    e.preventDefault()

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`,mydatas)
        alert(res.data.msg)
        setMydatas({useremail:"",userpassword:""})
        localStorage.setItem("token",res.data.token)
        
        navigate("/dashboard")

    } catch (error) {

        alert(error.response.data.msg)
        
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={mydatas.useremail} />
        <input type="password" name="userpassword" onChange={handleChange} placeholder="Enter the Password" value={mydatas.userpassword} />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
};

export default Login;