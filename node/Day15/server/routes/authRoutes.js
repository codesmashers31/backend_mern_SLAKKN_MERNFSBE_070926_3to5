import express from 'express'
import { dashboardData, logData } from '../controllers/authController.js'
import { verifyToken } from '../middleware/authMiddelWare.js'

const routes = express.Router()

// http://localhost:5000/api/auth/login

// http://localhost:5000/api/auth/dashboard

routes.post('/login',logData)
routes.get('/dashboard',verifyToken,dashboardData)
export default routes