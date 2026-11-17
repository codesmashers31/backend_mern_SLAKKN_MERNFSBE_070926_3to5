import mongoose from "mongoose";


const crudSchema = new mongoose.Schema({
    username:String,
    userage:Number
},{timestamps:true})


const crudModel = mongoose.model("adding",crudSchema)


export default crudModel