import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
},{timestamps:true})


const authModel = mongoose.model("authdatatable",authSchema)

export default authModel