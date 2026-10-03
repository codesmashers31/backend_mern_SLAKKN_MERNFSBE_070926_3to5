
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../layout/Layout'
import NotFound from '../components/NotFound'
import Products from '../pages/Products'
import ProductListing from '../pages/ProductListing'

const AppRoute = () => {
  return (
    <>
    
    <Routes>
       <Route element={<Layout/>}>

      
       <Route path='/' element={<Home/>}  />
       <Route path='/about' element={<About/>}  />
       <Route path='/contact' element={<Contact/>}  />
       <Route path='/help' element={<Help/>}  />
       <Route path='/product' element={<Products/>}  />
       <Route path='/productListing/:id' element={<ProductListing/>}  />
       </Route>

       <Route path='/login' element={<Login/>}  />
       <Route path='/register' element={<Register/>}  />

       <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default AppRoute