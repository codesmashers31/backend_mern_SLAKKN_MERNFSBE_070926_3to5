import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const DashBoard = () => {
 const navigate = useNavigate()

 const [myDatas,setMyDatas] = useState({})

const getDatas = async ()=>{

   
    try {

        const token = localStorage.getItem("token")

        console.log(token);
        

        if(!token){
            alert('Not a valid User')
            navigate("/")
            return
        }
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/dashboard`,{headers:{authorization:token}})

            //console.log(res);

            setMyDatas(res.data.getDatas)
            
    
        } catch (error) {

            alert("Token invalid try to login again")
            navigate("/")
            return
        
    }
}

const handleLogout = () => {

    localStorage.removeItem("token")
    navigate("/")
  
};


useEffect(()=>{
    getDatas()
},[])

  return (
    <>
      DashBoard Welcome! {myDatas.username}
      <p>{myDatas.useremail}</p>
      <button onClick={handleLogout}>LogOut</button>
    </>


  );
};

export default DashBoard;