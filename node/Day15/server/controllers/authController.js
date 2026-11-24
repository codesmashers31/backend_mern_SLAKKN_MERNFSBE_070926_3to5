import authModel from "../models/authModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { get } from "mongoose"
export const logData = async (req,res)=>{

  
    try {
        
        
        const {useremail,userpassword} = req.body
        if(!useremail || !userpassword){
            res.status(401).json({msg:"Fill the Form"})
            return
        }

       const usersData = await authModel.findOne({useremail})

       if(!usersData){
        res.status(401).json({msg:"Not a Valid User"})
            return
           
       }

       const checkpassword = await bcrypt.compare(userpassword,usersData.userpassword)
        
       console.log(checkpassword);
       


       if(!checkpassword) {

         res.status(401).json({msg:"Password is Incorrect"})
            return
          
       } 


       const token = await jwt.sign({id:usersData._id},process.env.JWT_SECRET,{expiresIn:"1d"});

       res.status(200).json({msg:"Success",token,usersData})


    } catch (error) {

        res.status(500).json({msg:error.message})
        console.log(error.message);
        
        
    }



}


export const dashboardData = async(req,res)=>{

    // console.log(req.user.id);

    const userid = req.user.id

    //console.log(userid);
    

    try {
        const getDatas = await authModel.findById(userid)
        //console.log(getDatas);

        res.status(200).json({getDatas})
        
    } catch (error) {

        console.log(error);
        res.status(500).json({msg:error})
        
        
    }
    

}