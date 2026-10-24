import  { useContext } from 'react'
import SendContext from '../context/SendContext'

const Products = () => {

    const {datasget} = useContext(SendContext)

    console.log('datasget',datasget);
    
  return (
    <div>
       {datasget.map((e,i)=>(
        <div className="bg-white w-100 h-100 text-black flex flex-col justify-center  items-center border-l-2 p-5" key={e.id}>
          <h2>{e.title}</h2>
          <p>{e.price}</p>
          <p>{e.category}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
