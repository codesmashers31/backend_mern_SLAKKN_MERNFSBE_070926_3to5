// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";


// const App = () => {

//   const [saveData,setSaveData] = useState({name:"",email:"",age:""});
//   const [ShowData,setShowData] = useState([])
//   const valueTake = (event)=>{

//     const {name,value} =  event.target


//     const copy = {...saveData,[name]:value}


//     setSaveData(copy)

//   }

//   const addData = (e)=>{

//     e.preventDefault()

//     if(!saveData.name.trim() || !saveData.email.trim() || !saveData.age.trim()){
//       alert("Please Fill the Datas")
//       return
//     }

//    const takeObj = {...saveData}

//   //  console.log(takeObj);
   

//    const addArr = [...ShowData,takeObj]

//   //  console.log(addArr);


//   //  setShowData(addArr)

//   //  console.log(ShowData);

//    localStorage.setItem("mydatas",JSON.stringify(addArr))

//    alert("Successfully Added")

//    setSaveData({name:"",email:"",age:""})    






   

//   }

//   const getData = ()=>{

//    const datas = JSON.parse(localStorage.getItem("mydatas"))


//    setShowData(datas)

//   }

 
//   getData()
 

// //  document.addEventListener("DOMContentLoaded",()=>{
// // getData()
// //  })

//   return (
//     <>
//     <form>

//       <input type="text"   name="name" value={saveData.name} placeholder="Enter the Name" onChange={valueTake}  />
//       <input type="email"  name="email" value={saveData.email} placeholder="Enter the Email" onChange={valueTake} />
//       <input type="number" name="age" value={saveData.age} placeholder="Enter the Age" onChange={valueTake}  />
//       <button onClick={addData}>Register</button>
//     </form>


//     <div>
//       {ShowData.map((e,i)=>(
        
//         <div key={i+1}>
//           <p>{e.name}</p>
//           <p>{e.email}</p>
//           <p>{e.age}</p>
//         </div>

//       ))}
//     </div>
//     </>
//   )
// }

// export default App





const App = ()=>{

  console.log("Component Running");
  

//  const [data,setDatas] = useState([])

const data = "react"

 const [name,setName] = useState("React")

//  const datas = JSON.parse(localStorage.getItem("mydatas"))


// setDatas(datas)

// console.log(data);

useEffect(()=>{
  console.log("Running");
  
  setName("Process rebdeirng")


  return ()=>{
    
  }
},[])


  return (<>
<h1>{name}</h1>
<p>{data}</p>
  </>)

}


export default App
 