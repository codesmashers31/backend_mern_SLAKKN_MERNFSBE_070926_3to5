import http from 'http'
import dotenv from 'dotenv'
import makeFile from './server.js'


dotenv.config()

const app = http.createServer()

const PORT = process.env.PORT || 3000

makeFile()

app.listen(PORT,()=>{
    console.log(`Server Successfully On .. http://localhost:${PORT}`);
    
})
