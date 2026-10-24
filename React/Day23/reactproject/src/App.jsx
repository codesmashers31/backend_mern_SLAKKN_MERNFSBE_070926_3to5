import { Children, useEffect, useRef, useState } from "react"
import SendContext from "./context/SendContext"
import Products from "./components/Products"


const App = () => {
  const [text,setText] = useState("React")
  const counter = useRef(null)
  const increceRef = useRef(0)
  const [datasget,setDatas] = useState([])

  const handleCounter = ()=>{

    const datas = increceRef.current+=1


    counter.current.textContent = datas


  }


  const getDatas = async()=>{

       try {

        const getdata = await fetch("https://dummyjson.com/products?limit=20")
        
        const change =await getdata.json() 

        const getmyvalue = change.products

        console.log(getmyvalue);
        

       setDatas(getmyvalue)



       } catch (error) {

        alert(error.message)
        
       }
     

  }


  useEffect(()=>{
    getDatas()
  },[])


  let fileters = [...datasget]



  const fileterabovefive = ()=>{

    fileters = fileters.filter((e)=>e.price<5)

    setDatas(fileters)

  }



  return (
    <>
    <div className="bg-amber-400 p-10 flex justify-center items-center">
      <div className="flex flex-col p-2 gap-10 justify-center items-center">
        <h2>{text}</h2>
      <button className="bg-black text-white p-2 w-50 text-center rounded-2xl" onClick={()=>setText(`${text}+="New"`)}>Change Text</button>
      

      </div>
    </div>

 <div className="bg-green-400 p-10 flex justify-center items-center">
      <div className="flex flex-col p-2 gap-10 justify-center items-center">
       <h2 ref={counter}>0</h2>
      <button onClick={handleCounter} className="bg-black text-white p-2 w-50 text-center rounded-2xl">Change Count</button>
      

      </div>
    </div>




     <div className="bg-green-400 flex-wrap gap-1  p-10 flex justify-center items-center">
      {fileters.map((e,i)=>(
        <div className="bg-white w-100 h-100 text-black flex flex-col justify-center  items-center border-l-2 p-5" key={e.id}>
          <h2>{e.title}</h2>
          <p>{e.price}</p>
          <p>{e.category}</p>
        </div>
      ))}

      <button onClick={fileterabovefive} className="bg-black p-2 w-50 rounded text-center text-white ">Above 5</button>
    </div>

    <Products/>
    
    </>
  )
}

export default App



export const SendProvider = ({children})=>{


    const [datasget,setDatas] = useState([])

      const getDatas = async()=>{

       try {

        const getdata = await fetch("https://dummyjson.com/products?limit=20")
        
        const change =await getdata.json() 

        const getmyvalue = change.products

        //console.log(getmyvalue);
        

       setDatas(getmyvalue)



       } catch (error) {

        alert(error.message)
        
       }
     

  }

    useEffect(()=>{
    getDatas()
  },[])
  return (<>
  


  
   
   <SendContext.Provider value={{datasget}}>
    {children}
   </SendContext.Provider>

   

  
  </>)
}