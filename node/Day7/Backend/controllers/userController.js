import userModel from "../models/userModel.js"

export const addDatas = async(req,res)=>{


    try {
          
        const {username,useremail,userpassword,usercity,joinData,status} = req.body


        const adding = await userModel.create({username,useremail,userpassword,usercity,joinData,status})
       

        res.status(201).json({msg:"Successfully done"})

    } catch (error) {

        console.log('Error',error);
        
        
    }
    
}



export const getDatas = async (req,res)=>{
    try {
        const resdata = await userModel.find()

        res.status(200).json({msg:"done",resdata})
    } catch (error) {

        console.log("Error",error);
        
        
    }
}