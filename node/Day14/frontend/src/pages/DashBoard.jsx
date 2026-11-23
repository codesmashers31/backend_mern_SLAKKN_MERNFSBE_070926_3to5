import axios from "axios";
import { useEffect } from "react";

const DashBoard = () => {


const token = localStorage.getItem("token")
    const getting = async ()=>{
        
        const res = await axios.get("http://localhost:5000/api/auth/dashborddata",{headers:{authorization:`Bearer ${token}`}})
         console.log('====================================');
         console.log(res);
         console.log('====================================');
   
    }

    useEffect(()=>{
        getting()
    },[])
  return (
    <>
       <h1>my Datas</h1>
    </>
  );
};

export default DashBoard;