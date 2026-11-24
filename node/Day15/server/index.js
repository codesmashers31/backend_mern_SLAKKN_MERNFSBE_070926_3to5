import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

dotenv.config()

ConnectDB()

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Connected Successfully on http://localhost:${PORT}`);
    
})