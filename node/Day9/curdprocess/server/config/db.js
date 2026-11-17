import mongoose from "mongoose";



const connecctDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database successfully conneted ${conn.connection.host}`);
        
    } catch (error) {


        console.log(error);
        process.exit(0)
        
        
    }
}

export default connecctDB