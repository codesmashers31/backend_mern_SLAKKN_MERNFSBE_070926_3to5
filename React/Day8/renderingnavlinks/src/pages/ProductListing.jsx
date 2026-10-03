import { useParams } from "react-router-dom"
import productList from "../datas/products"


const ProductListing = () => {
 
    const {id} = useParams()
   
    const prodctfind = productList.find((e)=>e.productid == id);
    console.log(prodctfind);

    

  return (

  
  <>
  <div className="bg-black p-10 flex justify-center items-center gap-10 text-white">
    <h2>{prodctfind.productid}</h2>
    <h3>{prodctfind.proName}</h3>
    <p>{prodctfind.Proprice}</p>
    <button>Add to cards</button>
  </div>
  </>
    
  )
}

export default ProductListing