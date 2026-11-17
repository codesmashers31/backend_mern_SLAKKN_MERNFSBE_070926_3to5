import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import crudRoute from './routes/curdRoute.js'
import connecctDB from './config/db.js'

const app = express()



dotenv.config()

connecctDB()

app.use(cors())
app.use(express.json())
app.use("/api/crud",crudRoute)

const PORT = process.env.PORT || 3000



app.listen(PORT,()=>{
    console.log(`Server Success conneted http://localhost:${PORT}`);
    
})