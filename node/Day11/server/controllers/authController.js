import authModel from "../models/authModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const addRegister = async (req,res) => {



 try {

  const {username,useremail,userpassword} = req.body


  const useremailcheck = await authModel.findOne({useremail})

  if(useremailcheck){
    res.status(500).json({msg:"Duplicate email"})
    return
  }

  const hashPassword = await bcrypt.hash(userpassword,10)

  //console.log(hashPassword);
   
  const insert = await authModel.create({username,useremail,userpassword:hashPassword})
 
  res.status(201).json({msg:"Successfully Resgiter"})
    
 } catch (error) {


    console.log('====================================');
    console.log(error);
    console.log('====================================');
    
 }



  
}



export const addLogin = async (req,res)=>{


    try {

        const {useremail,userpassword} = req.body
     

        const checkUser = await authModel.findOne({useremail})

        if(!checkUser){

            res.status(404).json({msg:"This Email id is not regsiter"})
            return
        }
   
        const checkPassword = await bcrypt.compare(userpassword,checkUser.userpassword)

        if(!checkPassword){
            res.status(500).json({msg:"Its Not a Valid Password"})
            return
        }

        const token = await jwt.sign({id:checkUser._id,name:checkUser.username},process.env.JWT_SECURE_KEY,{ expiresIn: '15m' })
        console.log('====================================');
        console.log(token);
        console.log('====================================');
        res.status(200).json({msg:"Success",checkUser,token})
       



        
    } catch (error) {


        res.status(500).json({msg:error.message})
        
    }

}