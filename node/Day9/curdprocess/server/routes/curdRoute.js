import express from 'express'
import { addDatas } from '../controllers/crudController.js'



const routes = express.Router()

// http://localhost:5000/api/crud/insert

routes.post("/insert",addDatas)


export default routes