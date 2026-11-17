import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [mydata,setMyData] = useState({username:"",userage:""})




  const handleChange = (e)=>{

    setMyData({...mydata,[e.target.name]:e.target.value})



  }

  const handleClick = async(e)=>{

    e.preventDefault()

  try {

    const add = await axios.post("http://localhost:5000/api/crud/insert",mydata)

    console.log("add");
    

    alert(add.data.msg)

    setMyData({username:"",userage:""})
    
  } catch (error) {


   alert(error.response.data.msg)
    
   

    // console.log("error",error.response.data.msg);
    

    // alert(error)
    
  }




  }

  return (
    <>
    <form>
      <input type="text" name="username" onChange={handleChange} value={mydata.username} placeholder='Enter the Name' />
      <input type="text" name="userage" onChange={handleChange} value={mydata.userage} placeholder='Enter the Age' />
      <button onClick={handleClick}>ADD Task</button>
    </form>
    </>
  )
}

export default App
