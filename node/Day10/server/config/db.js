import mongoose from "mongoose";



const ConnectDb = async ()=>{
   
       
      try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB Successfully COnnected ${conn.connection.host}`);
        
      } catch (error) {
        console.log('error',error);
        process.exit(0)
        
      }


}

export default ConnectDb;