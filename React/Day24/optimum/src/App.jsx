import { useEffect, useMemo, useState } from "react"


const App = () => {
 
  const [saveData,setSaveData] = useState([])
  const [search,setSerch] = useState("")
  const fetchDatas = async()=>{

    try {
      const getData = await fetch("https://dummyjson.com/products")
      const change =await getData.json()
      const datas = change.products

      setSaveData(datas)
     } catch (error) {

      console.log(error.message);
      
      
    }

  }


  // const datas = useMemo(()=>{
  //  return fetchDatas()
  // },[saveData])

  // console.log(datas);
  

  
  // const mydatas= [...saveData]

  // if(search){

  //   mydatas=mydatas.filter()

  // }
   
  
  return (
   <>

   <div>
    <input type="text" onChange={(e)=>setSerch(e.target.value)} />
   </div>
   <br />
   <div >
    {saveData.map((e)=>(
      <h2 key={e.id}>{e.title}</h2>
    ))}
   </div>
   </>
  )
}

export default App