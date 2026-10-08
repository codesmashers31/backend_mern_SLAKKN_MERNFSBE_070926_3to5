// import { useState } from "react"

import { useState } from "react"


// const App = () => {

//  const [obj,setObj] = useState([{username:"React",age:20},{username:"Node",age:22},{username:"JS",age:21}])


 
//  const handleClick = ()=>{

//    const updateData = [...obj]

//  const showing = updateData.map((e,i)=>i===1?{...e,username:"Js"}:e)

//  setObj(showing)

//     //  setObj({...obj,username:"Node"})

//  }

//   return (
//     <>
//     <div>
//       {obj.map((e,i)=>(
//         <div key={i+1}>
//           <h3>{e.username}</h3>
//           <h3>{e.age}</h3>
//         </div>
//       ))}

//       <button onClick={handleClick}>Click to update</button>
//     </div>
//     </>
//   )
// }

// export default App






// const App = () => {


//   const [count,setCount] = useState(0)


//   const handleCount = ()=>{

//      setCount((p)=>p+1)
//      setCount((p)=>p+1)
//      setCount((p)=>p+1)

//   }
  
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={handleCount}>Click To count</button>
//     </>
//   )
// }

// export default App





// const App = () => {
 
//   const [arr,setArr] = useState([1,2,3,4,5])

  
//   const handleClick = ()=>{


    // const adding = [...arr]



    // setArr(adding)

    // const adding = [...arr]

    // adding.push(98989)

    // setArr(adding)

    //  setArr((prev)=>[...prev,89898])


  //  Update

     // const copy = [...arr]

    // const updateData = copy.map((e)=>e==2?4536:e)

    // setArr(updateData)

    // setArr((prev)=>[...prev].map((e)=>e==1?4653:e))

  // }

//   return (
//     <>
//     <div>
//       {arr.map((e,i)=>(
//         <h1 key={i+1}>{e}</h1>
//       ))}
//     </div>

//     <button onClick={handleClick}>Click to Add</button>
//     </>
//   )
// }

// export default App





const App = () => {
 
  const [objarr,setObjArr] = useState([{username:"React",age:20},{username:"Node",age:22},{username:"JS",age:21}])

  const handleClick = ()=>{

    // const copy = [...objarr,{username:"React to",age:48}]

    // setObjArr(copy)

    // setObjArr((p)=>[...p,{username:"Node new",age:90}])

    const copy = [...objarr]


    copy.push({username:"Node new",age:90})

    setObjArr(copy)

  }

  const handleupdate = (datas)=>{

    // const copy = [...objarr]

    // const updateValue = copy.map((e)=>e.username==="React"?{...e,username:"myname",age:787}:e)

    // setObjArr(updateValue)

    setObjArr((p)=>[...p].map((e)=>e.username===datas?{...e,username:"myname",age:787}:e))


  }


  const deletHandleing = ()=>{

    const copy = [...objarr] 

    const deleteData = copy.filter((e,i)=>i!=2)

    console.log(deleteData);
    

    setObjArr(deleteData)

  }

  return (
    <>
    <div>
      {objarr.map((e,i)=>(
        <div key={i+1}>
          <h2>{e.username}</h2>
          <p>{e.age}</p>
           <button onClick={()=>handleupdate(e.username)}>Update</button>
        </div>
      ))}

      <button onClick={handleClick}>Click to Add</button>
     
      <button onClick={deletHandleing}>Delete</button>
    </div>
    </>
  )
}

export default App