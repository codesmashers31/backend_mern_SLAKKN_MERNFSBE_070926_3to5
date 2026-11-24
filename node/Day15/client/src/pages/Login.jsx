import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {

    const navigate = useNavigate()

    const [userdata,setUserData] = useState({useremail:"",userpassword:""})


  const handleChange = (e) => {

    setUserData((p)=>({...p,[e.target.name]:e.target.value}))
    
  };

  const handleSubmit = async(e) => {
   
       e.preventDefault()

       try {

        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`,userdata)
        
        // console.log(res);
         
        localStorage.setItem("token",res.data.token)

        setUserData({useremail:"",userpassword:""})

        navigate("/dashboard")
        


       } catch (error) {

        alert(error.response.data.msg)
        console.log(error.response.data.msg);
        
        
       }

    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
         <input type="email" name="useremail" onChange={handleChange} value={userdata.useremail} />
         <input type="password" name="userpassword" onChange={handleChange} value={userdata.userpassword} />
         <input type="submit"  value={"Login"} />
      </form>
    </>
  );
};

export default Login;