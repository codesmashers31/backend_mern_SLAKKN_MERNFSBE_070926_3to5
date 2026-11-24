import { Navigate } from "react-router-dom";

const ProductedRoute = ({children}) => {

   const datas =  localStorage.getItem("token")

   if(!datas){
      

    return <Navigate to="/"/>

   }

   return children
 
};

export default ProductedRoute;