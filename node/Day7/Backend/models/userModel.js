import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

    username:String,
    useremail:{type:String,unique:true,require:true},
    userpassword:String,
    usercity:String,
    joinData:String,
    status:{type:Boolean,default:true}

},{
    timestamps:true
})



const userModel = mongoose.model("userModeldatacollection",userSchema)


export default userModel;
