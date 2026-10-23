import {useState} from 'react'

const withAction = (WrappedComponent,action)=>(props)=>{

    const [msg,setMsg] = useState("")

    const handleClick = ()=>{
        if(action=="alert"){
            alert("Running")
        }
        if (action=="text") {

            setMsg("Running")
            
        }
    }


    return (<>
    
    <div>


        <WrappedComponent  {...props} handlebtn = {handleClick} />
        <h4>{msg}</h4>


    </div>
    
    
    </>)


}

export default withAction