
import logo from '../assets/hero.png'
const Navbar = () => {
  return (
   <>
   <div className="bg-blue-200 p-5 flex justify-evenly items-center">
         <div className="bg-white p-2 rounded-2xl w-30 flex justify-center">
          <img src={logo} alt="" className='w-10' />
         </div>
         <div className="flex gap-10">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>

         </div>
   </div>
   </>
  )
}

export default Navbar