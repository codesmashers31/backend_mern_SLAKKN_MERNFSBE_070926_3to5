import express from 'express'
import { addRegister,addLogin } from '../controllers/authController.js'

const routes = express.Router()

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login

routes.post("/register",addRegister)

routes.post("/login",addLogin)

export default routes