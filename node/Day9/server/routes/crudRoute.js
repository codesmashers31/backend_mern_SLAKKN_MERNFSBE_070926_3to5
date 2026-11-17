import express from 'express'
import { getDatas, insertData,getOneData,updateDatas,deletedatas } from '../controllers/crudController.js'


// // http://localhost:5000/api/crud/insert
// // http://localhost:5000/api/crud/get
// // http://localhost:5000/api/crud/getone/6afadbfe0232ff5b95a01e8e
//    http://localhost:5000/api/crud/updatedatas/6afadbfe0232ff5b95a01e8e

//  http://localhost:5000/api/crud/deletedatas/6afadbfe0232ff5b95a01e8e


const routes = express.Router()


routes.post("/insert",insertData)

routes.get("/get",getDatas)

routes.get("/getone/:userid",getOneData)

routes.put("/updatedatas/:userid",updateDatas)
routes.delete("/deletedatas/:userid",deletedatas)

export default routes