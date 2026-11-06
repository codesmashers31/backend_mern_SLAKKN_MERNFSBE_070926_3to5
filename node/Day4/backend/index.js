import express from 'express'
import dotenv from 'dotenv'

// console.log(express);
dotenv.config()


const app = express()


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Successfully Connected http://localhost:${PORT}`);
    
})