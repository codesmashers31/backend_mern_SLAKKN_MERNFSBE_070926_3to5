import axios from "axios";
import { useState } from "react";

const Login = () => {
 
 const [myform,setMyForm] = useState({useremail:"",userpassword:""})

 const handleChange = (e) => {

    setMyForm((p)=>({...p,[e.target.name]:e.target.value}))
   
 };


 const handleSubmit = async (e)=>{

    e.preventDefault()

    try {
        const conn = await axios.post("http://localhost:5000/api/auth/login",myform)
         
        setMyForm({useremail:"",userpassword:""})
        alert(`Successfully Login...${conn.data.userid}`)

        localStorage.setItem("accesstoken",conn.data.accesstoken)

    } catch (error) {
        
          alert(error.response.data.msg)

    }

 }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={myform.useremail} />
        <input type="text" name="userpassword" onChange={handleChange} placeholder="Enter the Password" value={myform.userpassword} />
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default Login;