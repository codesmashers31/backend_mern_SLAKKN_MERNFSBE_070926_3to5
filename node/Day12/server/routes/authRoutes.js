import express from 'express'
import { loginDatas, registerfn } from '../controllers/authController.js'

const routes = express.Router()

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login

routes.post("/register",registerfn)
routes.post("/login",loginDatas)

export default routes