import About from "./About"
import { Button, List } from "./Navbar"


const Home = () => {
  return (
    <>
    <div className="banner">
        <div className="subbanner">
             <List/>
            <Button/>
           
        </div>
    </div>

      <div>
        <About/>
      </div>
    </>
  )
}

export default Home