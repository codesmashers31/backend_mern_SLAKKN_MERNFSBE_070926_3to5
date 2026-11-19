// import { useState } from "react";
// import axios from 'axios'
// const App = () => {

//   const [userdatas,setUserDatas] = useState({username:"",useremail:"",userpassword:""})

 
//   const handleChange = (e) => {

//     setUserDatas((p)=>({...p,[e.target.name]:e.target.value}))
    
//   };


//   const handleSubmit = async(e) => {

//     e.preventDefault()

//   try {
//       const res = await axios.post("http://localhost:5000/api/auth/register",userdatas)

//     alert(res.data.msg)
//     setUserDatas({username:"",useremail:"",userpassword:""})
//   } catch (error) {

//     alert(error.response.data.msg)
    
//   }

    
//   };



//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" onChange={handleChange} placeholder="Enter the User Name" value={userdatas.username} />
//         <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the User Email" value={userdatas.useremail} />
//         <input type="password" name="userpassword" onChange={handleChange} placeholder="Enter the User password" value={userdatas.userpassword} />

//         <input type="submit" value={"Register"} />
//       </form>
//     </>
//   );
// };

// export default App;



import { useState } from "react";
import axios from 'axios'
const App = () => {

  const [userdatas,setUserDatas] = useState({useremail:"",userpassword:""})

 
  const handleChange = (e) => {

    setUserDatas((p)=>({...p,[e.target.name]:e.target.value}))
    
  };


  const handleSubmit = async(e) => {

    e.preventDefault()

  try {
      const res = await axios.post("http://localhost:5000/api/auth/login",userdatas)

    alert(res.data.msg)

    console.log(res.data.checkUser);
    console.log(res.data.token);
    
    
    setUserDatas({useremail:"",userpassword:""})
  } catch (error) {

    alert(error.response.data.msg)
    
  }

    
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
      
        <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the User Email" value={userdatas.useremail} />
        <input type="password" name="userpassword" onChange={handleChange} placeholder="Enter the User password" value={userdatas.userpassword} />

        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default App;