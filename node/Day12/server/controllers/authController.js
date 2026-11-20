import authModle from "../models/authModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const registerfn = async(req,res)=>{

   
    try {

        const {username,useremail,userpassword} = req.body

        if(!username || !useremail || !userpassword){
            res.status(404).json({msg:"Please FIll the Form"})
            return
        }

        const checkEmail = await authModle.findOne({useremail})

        if(checkEmail){
            res.status(404).json({msg:"Already Email Is there"})
            return
        }

        const hashedPassword = await bcrypt.hash(userpassword,10);



        const insert = await authModle.create({username,useremail,userpassword:hashedPassword})
        
        res.status(201).json({msg:"Successfully added"})


    } catch (error) {

        console.log(error);
        res.status(500).json({msg:"error",error})
        
        
    }



}




export const loginDatas = async (req,res)=>{
    try {

        const {useremail,userpassword} = req.body

        if(!useremail || !userpassword){
            res.status(404).json({msg:"Please FIll the Form"})
            return
        }

        const getUserDatas = await authModle.findOne({useremail})
  
        if(!getUserDatas) {
            res.status(404).json({msg:"Email it is not register"})
            return
        }

        const passwordCheck = await bcrypt.compare(userpassword,getUserDatas.userpassword)
        
        if(!passwordCheck) {
            res.status(404).json({msg:"Password In not valid"})
            return
        }

        const accesstoken = await jwt.sign({id:getUserDatas._id,username:getUserDatas.username},process.env.JWT_SECURE_KEY,{expiresIn:"1h"})

        res.status(200).json({accesstoken,userid:getUserDatas._id})
        
    } catch (error) {


        res.status(500).json({msg:"Error",error})
        console.log(error);
        
        
    }
}