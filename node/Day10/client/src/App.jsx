import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

 const [formDatas,setFormDatas] = useState({username:"",useremail:"",userpassword:""})

 const [showdatas,setShowDatas] = useState([])

 const [editId,setEditId] = useState(null)

 const fetchDatas  = async() => {
 

  try {
        const getNewDatas =  await axios.get("http://localhost:5000/api/crud/get")

        //  console.log(getNewDatas);

         setShowDatas(getNewDatas.data.getDatas)
         

  } catch (error) {

     alert(error.response.data.msg)
    
  }


   
 };

 useEffect(()=>{
  fetchDatas()
 },[formDatas,showdatas])


 const handleChange = (e) => {

  setFormDatas((p)=>({...p,[e.target.name]:e.target.value}))


  // console.log(formDatas);
  
   
 };

 const handleClick = async(e) => {

  e.preventDefault()
   
 try {


  // const link = "import meta.env.PORT"

  const res = await axios.post("http://localhost:5000/api/crud/insert",formDatas)

  alert(res.data.msg)

  setFormDatas({username:"",useremail:"",userpassword:""})

  
 } catch (error) {

  alert(error.response.data.msg)
  
 }


 };


 const handleEdit = (userdatas) => {



  setFormDatas(userdatas)
  setEditId(userdatas._id)


   
 };


 const handleUpdate = async(e) => {


    e.preventDefault()


  try {

    const res = await axios.put(`http://localhost:5000/api/crud/updatenewdata/${editId}`,formDatas)
    console.log(res);
     
    alert(res.data.msg)

     setFormDatas({username:"",useremail:"",userpassword:""})

     setEditId(null)

  } catch (error) {


    alert(error.response.data.msg)
    
  }
   
 };


 const handleDelete =async (userid) => {

  try {
    
     const res = await axios.delete(`http://localhost:5000/api/crud/deletedatas/${userid}`)
     alert(res.data.msg)


  } catch (error) {
    console.log('error',error);
    
  }
   
 };
 

  return (
    <>
    <form>
      <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={formDatas.username} />
      <input type="text" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={formDatas.useremail} />
      <input type="password" name="userpassword" onChange={handleChange} placeholder="Enter the Password" value={formDatas.userpassword} />
       {editId==null?<button onClick={handleClick}>Register</button>:<button onClick={handleUpdate}>Update</button>}
       
       
    </form>


    <div>
     {showdatas.length==0?(<p>No Datas Found</p>):(showdatas.map((e,i)=>(
        <div key={e._id}>

          <p>{e.username}</p>
          <p>{e.useremail}</p>
          <p>{e.status}</p>

          <button onClick={()=>handleEdit(e)}>Edit</button>
          <button onClick={()=>handleDelete(e._id)}>Delete</button>

        </div>
      )))}
    </div>
    </>
  );
};

export default App;