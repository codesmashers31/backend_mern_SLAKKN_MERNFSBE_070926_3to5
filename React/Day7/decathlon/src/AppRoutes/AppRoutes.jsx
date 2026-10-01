import { Route, Routes } from 'react-router-dom'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Kids from '../pages/Kids'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/kids' element={<Kids/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes
