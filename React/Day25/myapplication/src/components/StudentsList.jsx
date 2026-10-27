import React from "react"


const StudentsList = ({mydatas,deleteDatas}) => {
  console.log('Running');
  
  
    return (
    <>
    <div>
        {mydatas.map((e)=>(
           <div key={e.id}>
             <h2>{e.id}</h2>
            <h3>{e.name}</h3>
            <h3>{e.subject}</h3>

            <button onClick={()=>deleteDatas(e.id)}>Delete</button>
           </div>
        ))}
    </div>
    </>
  )
}

export default React.memo(StudentsList)