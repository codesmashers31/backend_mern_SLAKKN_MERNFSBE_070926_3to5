import { useState } from "react";
import axios from 'axios'
const Register = () => {

  const [mydatas,setMydatas] = useState({username:"",useremail:"",userpassword:""})

  const handleChange = (e) => {


    setMydatas((p)=>({...p,[e.target.name]:e.target.value}))
    
  };


  const handleSubmit = async(e)=>{

    e.preventDefault()

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`,mydatas)
        alert(res.data.msg)
        setMydatas({username:"",useremail:"",userpassword:""})
    } catch (error) {

        alert(error.response.data.msg)
        
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={mydatas.username} />
        <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={mydatas.useremail} />
        <input type="password" name="userpassword" onChange={handleChange} placeholder="Enter the Password" value={mydatas.userpassword} />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
};

export default Register;