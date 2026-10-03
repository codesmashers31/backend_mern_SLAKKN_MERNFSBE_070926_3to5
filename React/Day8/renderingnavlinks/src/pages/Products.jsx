import { useLocation, useNavigate } from 'react-router-dom'
import productList from '../datas/products.js'

const Products = () => {

    const navigate = useNavigate()

    const datas = useLocation()

    console.log('datas',datas);
    
  
const handleMove = (userid)=>{

    navigate(`/productListing/${userid}`)

}

  return (
    <>
    <div className="bg-amber-400 p-10 flex justify-center  gap-10 items-center h-100">
       {productList.map((e)=>(
        <div key={e.productid} className='bg-white rounded-2xl flex flex-col gap-3 p-2 h-40 w-60'>
            <h4>{e.productid}</h4>
            <h2>{e.proName}</h2>
            <p>{e.Proprice}</p>
            <button onClick={()=>handleMove(e.productid)} className='bg-black text-white tetx-center p-1 rounded '>Read More</button>
        </div>
       ))}
    </div>
    </>
  )
}

export default Products