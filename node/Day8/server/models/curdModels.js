import mongoose from "mongoose";




const crudScheme = new mongoose.Schema({
    username:{type:String},
    userage:Number
},{timestamps:true})


const crudModel = mongoose.model("curdops",crudScheme)


export default  crudModel