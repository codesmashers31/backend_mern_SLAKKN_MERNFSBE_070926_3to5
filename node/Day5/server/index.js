import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/authRoutes.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 4000



app.listen(PORT,()=>{
    console.log(`Server Successfully Done... http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/auth

