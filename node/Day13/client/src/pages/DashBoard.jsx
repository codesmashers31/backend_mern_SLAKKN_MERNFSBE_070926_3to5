import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const DashBoard = () => {
 const navigate = useNavigate()

 const [userdatas,setUserDatas] = useState({})

    const getdats = async ()=>{

       

     try {
        
         const token = localStorage.getItem("token")

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/dashborddata`,{headers:{Authorization:`Bearer ${token}`}})
        
        // console.log(res.data.user);
        setUserDatas(res.data.msg)
    
    } catch (error) {

        alert('Unauthriesd User');

        navigate("/login")
        
        
     }

    }


    useEffect(()=>{
        getdats()
    },[])

  return (
    <>
      <div>
        datas dashboard datas
        <h1>{userdatas.id}</h1>
      </div>
    </>
  );
};

export default DashBoard;