import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

connectDB()

const server = express()


server.use(cors())
server.use(express.json())
server.use("/api/auth",authRoutes)


const PORT = process.env.PORT || 3000


server.listen(PORT,()=>{
    console.log(`Server Successfully Connected http://localhost:${PORT}`);
    
})



