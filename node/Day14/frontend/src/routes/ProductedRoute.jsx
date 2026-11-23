import React from 'react'
import { Navigate } from 'react-router-dom'

const ProductedRoute = ({children}) => {
  
   
  const token = localStorage.getItem("token")  
 
  if(!token) {
    alert('Its nOt a valid user')
    return <Navigate to={"/login"}  />
  }

  return children
}

export default ProductedRoute
