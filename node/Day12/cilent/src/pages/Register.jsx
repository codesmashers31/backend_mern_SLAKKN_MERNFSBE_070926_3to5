import axios from "axios";
import { useState } from "react";

const Register = () => {

 const [myform,setMyForm] = useState({username:"",useremail:"",userpassword:""})

 const handleChange = (e) => {

    setMyForm((p)=>({...p,[e.target.name]:e.target.value}))
   
 };


 const handleSubmit = async (e)=>{

    e.preventDefault()

    try {
        const conn = await axios.post("http://localhost:5000/api/auth/register",myform)
        alert(conn.data.msg)
        setMyForm({username:"",useremail:"",userpassword:""})
    } catch (error) {
        
          alert(error.response.data.msg)

    }

 }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={myform.username} />
        <input type="text" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={myform.useremail} />
        <input type="text" name="userpassword" onChange={handleChange} placeholder="Enter the Password" value={myform.userpassword} />
        <input type="submit" value={"Register"} />
      </form>
    </>
  );
};

export default Register;