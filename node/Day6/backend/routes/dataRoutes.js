import express from 'express'
import { bodyDatas, paramsDatas, queryDatas,headresDatas } from '../controllers/dataController.js'


// http://localhost:5000/api/data/bodydata
// http://localhost:5000/api/data/paramsdata/13243525264
// http://localhost:5000/api/data/querydata?userdata="react"
// http://localhost:5000/api/data/headersdata
const routes = express.Router()


routes.post("/bodydata",bodyDatas)
routes.get("/paramsdata/:userid",paramsDatas)
routes.get("/querydata",queryDatas)
routes.get("/headersdata",headresDatas)

export default routes