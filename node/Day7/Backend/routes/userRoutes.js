import express from 'express'
import { addDatas,getDatas } from '../controllers/userController.js'

const route = express.Router()

// http://localhost:5000/api/v1/register
// http://localhost:5000/api/v1/get
route.post("/register",addDatas)
route.get("/get",getDatas)




export default route