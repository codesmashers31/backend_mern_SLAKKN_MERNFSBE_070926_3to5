
import { Route, Routes } from 'react-router-dom'
import Login from '../componants/Login'
import LinkNav from '../componants/LinkNav'
import NavBar from '../componants/NavBar'

const AppRoutes = () => {

    
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<LinkNav/>}/>
        <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default AppRoutes