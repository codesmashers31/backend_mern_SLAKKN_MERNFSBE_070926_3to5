import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const [datas,setDatas] = useState({})
  const navigate = useNavigate()
  const getdata = ()=>{

    const takeData = JSON.parse(localStorage.getItem("isActiveuser"))
    
    if(!takeData) {
      alert("Please Login Or regsiter")
      navigate("/login")
      return
    }

    setDatas(takeData)

    // console.log(datas);
    

    // const {id,name,email} = datas


  }

  useEffect(()=>{

    getdata()
  },[])
  return (
    <>
    <div className="bg-gray-300 flex justify-center items-center p-10 h-100">
      <div>
        <h1>{datas.id}</h1>
        <h2>{datas.name}</h2>
        <p>{datas.email}</p>
      </div>
    </div>
    </>
  )
}

export default Home