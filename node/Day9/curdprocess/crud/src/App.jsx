import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [userdata,setUserData] = useState({username:"",userage:""})

  const [success,setSuccess] = useState("")


  const handleChange = (e)=>{

    setUserData({...userdata,[e.target.name]:e.target.value})

  }


  const handleClick = async (e)=>{

    e.preventDefault()

    try {
         
      const res = await axios.post("http://localhost:5000/api/crud/insert",userdata)

      console.log(res.data.msg);

      setSuccess(res.data.msg)

      setUserData({username:"",userage:""})
      

        
    } catch (error) {

       let datas = error.response.data.msg
      setSuccess(datas);
      
      
    }

  }
   
  return (
   <>
   <form>
    <input type="text" name="username" onChange={handleChange} value={userdata.username} placeholder='Enter the Name' />
    <input type="number" name="userage"  onChange={handleChange} value={userdata.userage} placeholder='Enter the age'  />
    <button onClick={handleClick}>Add Task</button>

  
   </form>

   <p>{success}</p>
   </>
  )
}

export default App
