import { useState } from "react"

const Regsiter = () => {

    const [formdata,setFormdata] = useState({username:"",userage:"",useremail:"",userpassword:""})
    const [showdata,setShowData] = useState([])

    const [editid,setEditId] = useState(null)
  
  const handleChange = (e)=>{

    //   console.log(e);
    //   const value = e.target.value

    //   const key = e.target.name

    //   const updateData = {...formdata,[key]:value,}
   
     const datasave = {...formdata,[e.target.name]:e.target.value}

     setFormdata(datasave)
    
      
      
    //   setFormdata((p)=>({...p,[e.target.name]:e.target.value}))
      
    
  }  
  

  
  const handleSubmit = (e)=>{

     e.preventDefault()

    if(formdata.username == "" || formdata.userage=="" || formdata.useremail=="" || formdata.userpassword==""){
        alert("Please Fill The form")
        return
    }
    
   
   const checkEmail = showdata.find((e)=>e.useremail == formdata.useremail);
   
   console.log(checkEmail);
   

    if(checkEmail){
        alert("Alert Email Use Try Different")
        return
    }
    const creteProcess = {id:Date.now(),username:formdata.username,userage:formdata.userage,useremail:formdata.useremail,userpassword:formdata.userpassword}

    setShowData((p)=>[...p,creteProcess])
    
    alert('Succfully Done')
    setFormdata({username:"",userage:"",useremail:"",userpassword:""})
    

  }

  const handleEdit = (datas,i)=>{
   

    setFormdata(datas)
   
    setEditId(i)

      

  }


  const handleDelete = (userid)=>{
 

    const deleteData = showdata.filter((e,i)=>userid !== i)

    setShowData(deleteData)


  }

  const handleUpdate = (event)=>{

    event.preventDefault()

   const datas = [...showdata] 

   const udpateData = datas.map((e,i)=>i==editid?{...e,...formdata}:e)

   console.log(udpateData);
   

   setShowData(udpateData)
   setEditId(null)

  setFormdata({username:"",userage:"",useremail:"",userpassword:""})

  }

  return (
    <>
    <div className="bg-green-500 text-white flex justify-center items-center p-5">
        <h2 className="font-bold text-2xl">Form Handling</h2>
    </div>

    <div className="bg-amber-200  h-150 flex justify-center items-center p-10">
         <form className="bg-white rounded-2xl p-5 flex flex-col w-100 justify-center items-center gap-10">
            <input onChange={handleChange} value={formdata.username} name="username" type="text" placeholder="Enter the Name" className="bg-white mt-5 rounded p-2 w-80 text-black border border-black" />
            <input onChange={handleChange} value={formdata.userage} name="userage" type="number" placeholder="Enter the Age" className="bg-white p-2 w-80 rounded text-black border border-black" />
            <input onChange={handleChange} value={formdata.useremail} name="useremail" type="email" placeholder="Enter the Email" className="bg-white p-2 w-80 rounded text-black border border-black" />
            <input onChange={handleChange} value={formdata.userpassword} name="userpassword" type="password" placeholder="Enter the Password" className="bg-white p-2 rounded w-80 text-black border border-black" />
            

            {editid===null?<button className="bg-black p-1 w-30 rounded text-white" onClick={handleSubmit}>Register</button>:<button className="bg-black p-1 w-30 rounded text-white" onClick={handleUpdate}>Update</button>}
            
            
         </form>
    </div>


    <div className="p-10 flex justify-center items-center">
        <table className="table-auto w-300  border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300">S.No</th>
                    <th className="border border-gray-300">UserName</th>
                    <th className="border border-gray-300">UserAge</th>
                    <th className="border border-gray-300">UserEmail</th>
                    <th className="border border-gray-300">Status</th>
                    <th className="border border-gray-300">Action</th>
                </tr>
            </thead>
            <tbody>
                {showdata.map((e,i)=>(
                    <tr key={i+1} className="text-center">
                        <td className="border border-gray-300">
                            {e.id}
                        </td>
                        <td className="border p-2 border-gray-300">{e.username}</td>
                        <td className="border p-2 border-gray-300">{e.userage}</td>
                        <td className="border p-2 border-gray-300">{e.useremail}</td>
                        <td className="border p-2 border-gray-300">Active</td>
                        <td className="border p-2 border-gray-300"><button onClick={()=>handleEdit(e,i)} className="bg-green-400 p-1 w-30 rounded mx-4">Edit</button> <button className="bg-red-400 p-1 w-30 rounded" onClick={()=>handleDelete(i)}>Delete</button></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Regsiter