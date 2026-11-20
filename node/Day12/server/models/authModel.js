import mongoose from "mongoose";



const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
},{timestamps:true})


const authModle = mongoose.model("mydatas",authSchema)

export default authModle