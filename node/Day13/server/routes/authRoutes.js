import express from 'express'
import { addDatas,loginDatas,getDatas } from '../controllers/authController.js'
import { verifyToken } from '../middleware/authMiddleWare.js'

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login
// http://localhost:5000/api/auth/dashborddata
const routes = express.Router()

routes.post("/register",addDatas)
routes.post("/login",loginDatas)
routes.get("/dashborddata",verifyToken,getDatas)

export default routes