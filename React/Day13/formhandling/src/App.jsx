import { useState } from "react"


const App = () => {
  
const [datas,setDatas] = useState("")
const [saveData,setSaveData] = useState([])


  const handleChange = (e)=>{
  
   const value =  e.target.value

   setDatas(value)

  
  }

  const handleClick = ()=>{

    // const copy = [...saveData,"this is react"]

    // setSaveData(copy)

    // const copy = [...saveData]

    // copy.push("741")

    // setSaveData(copy)

  
    setSaveData((p)=>[...p,datas])
     
    setDatas("")
   

  }


  const handleEdit = (data)=>{

    setDatas(data)

  }


  const handleDelete = (datasnew)=>{

      const copy = [...saveData]

      const deleteData = copy.filter((e,i)=>i!==datasnew)
     
      setSaveData(deleteData)


  }

  return (
    <>
    {/* {datas} */}
  
    <input type="text" value={datas} onChange={handleChange} />
    <button onClick={handleClick}>Add Task</button>


      <div>
      {saveData.map((e,i)=>(
     
         <div  key={i+1}>
          <h4>{i+1}</h4>
          <p>{e}</p>
          <button onClick={()=>handleEdit(e)}>Edit</button>
          <button onClick={()=>handleDelete(i)}>Delete</button>
         </div>

      ))}
    </div>
    </>
  )
}

export default App