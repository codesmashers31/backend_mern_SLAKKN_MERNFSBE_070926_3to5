
// const withFeature = (WrappedComponent)=>{
//     const NewComponent = (props)=>{

import { useState } from "react"

//       return <WrappedComponent {...props} />

//     }

//   return NewComponent
// }


// const withButton = (WrappedComponent)=>(props)=>{
  
        // return <WrappedComponent {...props}  />

// }

// import withAction from './hoc/withAction'

import MyButton from './components/MyButton'
import CursorGrid from "./components/CursorGrid"

// const AlertButton = withAction(MyButton,"alert")
// const TextButton =  withAction(MyButton,"text")

// const App = () => {
//   return (
//     <div>
//       <h2>Higher Order Components</h2>
//       <AlertButton title="ALert Button" />
//       <TextButton  title="Text Button" />
//     </div>
//   )
// }

// export default App





const App = () => {
  const [msg,setMsg] = useState("")

    const handleClick = ()=>{
   
            alert("Running")
    
    }

    const handleText = ()=>{

      setMsg("Running")

    }

  return (
    <>
    <h1>{msg}</h1>
    <MyButton title="Alert Button" handlebtn={handleClick} />
    <MyButton title="Text Button" handlebtn={handleText} />
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <CursorGrid
    cellSize={60}
    color="#ffffff"
    highlight="area"
    gridStyle="lines"
    radius={140}
    holdTime={400}
    fadeDuration={800}
    fillOpacity={0.06}
    gridOpacity={0.08}
    spotlight={0.6}
    clickPulse
  >
    {/* Your content here */}
  </CursorGrid>
</div>
    
    </>
  )
}

export default App
