import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigateMove = useNavigate()

    const handleClick = ()=>{

     navigateMove("/product",{state:{name:"React"}})

    }
  return (
    <>
    <div className='bg-green-500 p-10 h-100 flex justify-center items-center '>
        <button className='bg-black text-white p-2 w-40 rounded-2xl' onClick={handleClick}>Click to Product</button>
    </div>
    </>
  )
}

export default Home