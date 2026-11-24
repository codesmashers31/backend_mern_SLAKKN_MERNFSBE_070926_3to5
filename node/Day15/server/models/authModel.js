import mongoose from "mongoose";



const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
},{timestamps:true})

const authModel = mongoose.model("authdatatables",authSchema)

export default authModel