import menone from "../assets/images/men1.jpeg"
import mentwo from "../assets/images/men1.jpg"
import menthree from "../assets/images/men2.jpeg"
import menfour from "../assets/images/men4.jpeg"
import menfive from "../assets/images/men3.jpeg"
const Home = () => {
  return (
<>
<div className=' h-100 p-10'>
    <div className=' p-3 flex gap-10 mx-5 shadow-2xs'>
        <img src={menone} alt="" className="w-60 h-60 rounded-2xl" />
        <img src={mentwo} alt="" className="w-60 h-60 rounded-2xl" />
        <img src={menthree} alt="" className="w-60 h-60 rounded-2xl" />
        <img src={menfour} alt="" className="w-60 h-60 rounded-2xl" />
        <img src={menfive} alt="" className="w-60 h-60 rounded-2xl" />
    </div>
</div>


</>
  )
}

export default Home
