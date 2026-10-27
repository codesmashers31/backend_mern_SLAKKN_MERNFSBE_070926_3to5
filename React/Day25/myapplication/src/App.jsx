// import { memo, useCallback, useEffect, useState } from "react"
// import Counter from "./components/Counter";

import { useCallback, useState } from "react"
import StudentsList from "./components/StudentsList"

// // const Chiled = memo(({onButton})=>{
// //   return (<>
// //     <button onClick={onButton}>Child</button>
// //   </>)
// // })

// const App = () => {
 
//   const [count,setCount] = useState(0)

//   const getValue = useCallback(()=>{
//     console.log(`This is the Value of the Process`);
    
//   },[])

//   useEffect(()=>{

//     console.log("Function Changed");
    
//   },[getValue])

//   return (
//     <>
//    <h2>{count}</h2>
//    <Counter  onButton = {getValue} />
//    <button onClick={()=>setCount((p)=>p+1)}>Click to Incr</button>
//     </>
//   )
// }

// export default App






const App = () => {

 const [count,setCount] = useState(10)

 const [datas,setDatas] = useState([{id:1,name:"React",class:"BCA",subject:"BCA"},
  {id:2,name:"Node",class:"CSE",subject:"BE"},
  {id:3,name:"JS",class:"MATHS",subject:"FE"},
  {id:4,name:"HTML",class:"SCIENCE",subject:"BE"}
 ])


const deletedata = useCallback((userid)=>{

  
  setDatas((p)=>p.filter((e)=>e.id!==userid))
   

},[])


  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount((p)=>p+1)}>Click</button>
    <StudentsList  mydatas={datas} deleteDatas = {deletedata}   />
    </>
  )
}

export default App