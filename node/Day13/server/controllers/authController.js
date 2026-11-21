import authModel from "../models/authModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const addDatas = async (req,res)=>{
    try {
        const {username,useremail,userpassword} = req.body
        
        if(!username || !useremail || !userpassword){
            res.status(404).json({msg:"Please Fill the form"})
            return
        }

        const checkEmail = await authModel.findOne({useremail})

        if(checkEmail) {
            res.status(404).json({msg:"Already Used"})
            return
        }

        const changePassword = await bcrypt.hash(userpassword,10)



        const add = await authModel.create({username,useremail,userpassword:changePassword})

        res.status(201).json({msg:"Successfully Register"})
     


    } catch (error) {

        console.log('error',error);
        
        res.status(500).json({msg:error.message})
        
    }
}


export const loginDatas = async (req,res)=>{
    try {
         const {useremail,userpassword} = req.body
        
        if( !useremail || !userpassword){
            res.status(404).json({msg:"Please Fill the form"})
            return
        }

        const checkEmail = await authModel.findOne({useremail})

        if(!checkEmail) {
            res.status(404).json({msg:"Email id is not regsiter"})
            return
        }


        const checkPassword = await bcrypt.compare(userpassword,checkEmail.userpassword)
        
        if(!checkPassword) {

             res.status(404).json({msg:"Password incorrect"})
            return

        }

        const token = await jwt.sign({id:checkEmail._id,username:checkEmail.name},process.env.JWT_SECURE_KEY,{expiresIn:"1d"})
        
         res.status(200).json({msg:"success",token,userinfo:checkEmail._id})
         


    } catch (error) {

        console.log('error',error);
        res.status(500).json({msg:error.message})
        
        
    }
}


export const getDatas = async (req,res)=>{
    try {

        // console.log(req);
        res.status(200).json({msg:req.user})
        
    } catch (error) {

        console.log(error);
        
        
    }
}