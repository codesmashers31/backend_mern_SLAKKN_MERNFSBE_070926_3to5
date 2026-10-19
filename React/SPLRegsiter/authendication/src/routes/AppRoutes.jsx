import {Navigate, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Layout from '../layout/Layout'
export default function AppRoutes(){return <Routes><Route element={<Layout/>}><Route path="/home" element={<Home/>}/><Route path="/profile" element={<Profile/>}/></Route><Route path="/" element={<Register/>}/><Route path="/register" element={<Register/>}/><Route path="/login" element={<Login/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
