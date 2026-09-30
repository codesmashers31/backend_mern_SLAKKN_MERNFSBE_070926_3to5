import React, { useState } from 'react'

const Login = () => {

 const [userDatas,setUserDatas] = useState({username:"",email:""})

 const [showDatas,setShowDatas] = useState([])
  
  const handleChange = (e)=>{
    
    console.log(e);
    
    const key = [e.target.name]
    const value = e.target.value

    setUserDatas({...userDatas,[key]:value})



  }

  const handleCLick = ()=>{

    const datas = [...showDatas]

    datas.push(userDatas)

    setShowDatas(datas)

  }


let line = ""
  for(let i = 1;i<10;i++){

    console.log(i);
    
    line += i + " "

    

  }
console.log(line);


  return (
    <>
    <div className='bg-amber-100 flex justify-center items-center p-10 h-100'>
         
        <div className='bg-white rounded-2xl w-100 p-10 flex flex-col gap-10 h-60'>
           
           <form>
            <input type="text" name='username' onChange={handleChange} />
            <input type="text" name='email' onChange={handleChange} />
            <button onClick={handleCLick}>Register</button>
           </form>
            
        </div>
        </div>
       

    </>
  )
}

export default Login