import { useEffect, useState } from "react";


const useFetchDatas = (url) => {


    const [datasave,setDatasave] = useState([])
   
   const getDatas = async()=>{
    
    try {

         
     const datas = await fetch(url)

     const change = await datas.json()

     setDatasave(change.products)
     

        
    } catch (error) {

        console.log('error',error.message);
        
        
    }


   }

   useEffect(()=>{
     getDatas()
   },[])


  return {datasave}
}

export default useFetchDatas