import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import CONNECT_DB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()



const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1", userRoutes)

CONNECT_DB()

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})

// http://localhost:5000/api/v1