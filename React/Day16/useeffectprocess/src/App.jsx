// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"


// const App = () => {
 
//   console.log('Component Running');
  

//   const [count,setCount] = useState(0)
//   const [number,setNumber] = useState(0)

//  useEffect(()=>{
//   console.log('UseEffect Running');
   
//   const timer = setInterval(()=>{
//     setCount((p)=>p+1)
//   },1000)


//   return ()=>{
//     clearInterval(timer)
//   }
  
//  },[])


//  const datas = ()=>{
//   setNumber(number+1)
//  }
 

//   return (
//     <>
//     <div>UseEffect</div>
//     <h2>{count}</h2>

//     <p>{number}</p>

//     <button onClick={datas}> Click to update</button>
//     </>
//   )
// }

// export default App





// const App = () => {
 
//   const [userdatas,setUserDatas] = useState({username:"",userage:"",useremail:""})
//   const [mydata,setMyData] = useState([])

//     const getDatas = ()=>{

//     const get = localStorage.getItem("myregiter")

//     const change = JSON.parse(get)


    
//     setMyData(change)

    

//   }

//   useEffect(()=>{
//     getDatas()
//   },[userdatas])

//   const handleChange = (e)=>{

//     setUserDatas({...userdatas,[e.target.name]:e.target.value})

//   }

  

//   const handleClick = (e)=>{
//     e.preventDefault()

//     const getdata = JSON.parse(localStorage.getItem("myregiter")) || []
      
//     const checkemail = mydata.find((e)=>e.email == userdatas.useremail)
     
//     console.log(checkemail);
    

//     if(checkemail) {
//       alert("Already In use try different")
//       return
//     }

//     const obj = {userid:Date.now(),name:userdatas.username,age:userdatas.userage,email:userdatas.useremail}
    
    
    
//      getdata.push(obj)
    
//     const change = JSON.stringify(getdata)

//     localStorage.setItem("myregiter",change)
    
//     setUserDatas({username:"",userage:"",useremail:""})
//     alert("successfully done")


//   }




//   return (
//     <>
//     <div>
//       <form>
//         <input type="text" name="username" value={userdatas.username} onChange={handleChange} placeholder="" />
//         <input type="text" name="userage" value={userdatas.userage} onChange={handleChange} placeholder="" />
//         <input type="text" name="useremail" value={userdatas.useremail} onChange={handleChange} placeholder="" />
//         <button onClick={handleClick}>Register</button>
//       </form>
//     </div>

//     <div>
//       {mydata.map((e)=>(
//          <div key={e.userid}>
//           <h3>{e.name}</h3>
//           <p>{e.age}</p>
//           <p>{e.email}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App


const App = () => {


  const [datas,setDatas] = useState([])
 
  const [serach,setSerch] = useState("")


// ()=>{

// }()

 useEffect(()=>{
  //  (async()=>{
  //   fetchDatas()
  //  })()

    const fetchDatas = async()=>{

    const getDatas = await fetch("https://dummyjson.com/products")

    const datas = await getDatas.json()

    //console.log(datas.products);

     setDatas(datas.products)
    

  }
fetchDatas()
  
 },[])

let product = [...datas]

 const handleChange = (e)=>{

 const datas =  e.target.value


 setSerch(datas)

 

 const serachdatas  = product.filter((e)=>e.title.toLowerCase().includes(serach.toLowerCase()))

 //console.log(serachdatas);

 setDatas(serachdatas)
 


 }
  
  return (
    <>
    <h1>This is App</h1>

    <div>
   
    <input type="text" onChange={handleChange} />


      {product.map((e)=>(
        <div key={e.id}>
          <img src={e.images} alt="" style={{width:"100px"}} />
          <h1>{e.title}</h1>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App