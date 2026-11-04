import http from 'http'
import dotenv from 'dotenv'
import { fileHanding } from './fileprocess/handleingFile.js'

const app = http.createServer()

dotenv.config()

//console.log(app);

const PORT = process.env.PORT || 3000

//console.log(PORT);



app.listen(PORT,()=>{
    console.log(`Successfully Connected http://localhost:${PORT}`);
    
})
