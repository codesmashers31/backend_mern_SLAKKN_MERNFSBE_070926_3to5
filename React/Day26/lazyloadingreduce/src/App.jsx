
// import React, { lazy, Suspense, useState } from 'react'
// import Help from './components/Help'
// // import About from './components/About'

import { Link, Route, Routes } from "react-router-dom"
// import Project from "./components/Project"
// import About from "./components/About"
// import Help from "./components/Help"
import { lazy, Suspense, useReducer } from "react"

// const About = lazy(()=>import ("./components/About")) 


// const App = () => {

//  const [datas,setDatas] = useState(false)

//   return (
//     <>
//     <button onClick={()=>setDatas(!datas)}>Click to change</button>
    
//     <Help/>


//     {datas&&(<Suspense fallback={<h3>Loading.....</h3>}>
//          <About/>
//    </Suspense>)}

//      {/* {datas&&<About/>} */}
//     </>
//   )
// }

// export default App


// const Project = lazy(()=>import('./components/Project'))
// const About = lazy(()=>import('./components/About'))
// const Help = lazy(()=>import('./components/Help'))

// const App = () => {




//   return (
//     <>
//     <nav>
//       <Link to={"/"}>Project</Link>
//       <Link to={"/about"}>About</Link>
//       <Link to={"/help"}>Help</Link>
//     </nav>


//    <Suspense fallback={<h3>Loading...</h3>}>
//      <Routes>
      
//       <Route path="/" element={<Project/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/help" element={<Help/>} />

//     </Routes>
//    </Suspense>
//     </>
//   )
// }

// export default App



let init = 0
const reducer = (counters,action)=>{

switch(action.type){

  case "INC":
    return counters+1
  case "DNC":
    return counters-1
  case "RESET":
    return  init
    
  default:
    return counters

}

}


const App = () => {

 const [count,dispatch] = useReducer(reducer,init)
 

  return (
    

  <div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DNC"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
  </div>

  )
}

export default App