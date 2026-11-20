import mongoose from "mongoose";


const connectDB = async () => {

  
    try {
        const hconn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB Connected ${hconn.connection.host}`);
        
    } catch (error) {

        console.log('error',error);
        process.exit(1)
        
        
    }

  
}


export default connectDB