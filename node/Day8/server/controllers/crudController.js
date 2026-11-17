import crudModel from "../models/curdModels.js";

export const insertData = async(req,res)=>{



    try {
        const {username,userage} = req.body
      
        const insert = await crudModel.create({username,userage});

        if(insert){
            res.status(201).json({msg:"Success",insert})
        }

    } catch (error) {

        console.log(error.message);
        
        res.status(500).json({msg:error})
        
    }



}


export const getDatas = async (req,res)=>{


    try {

        const getData = await crudModel.find()

        res.status(200).json({msg:"Success", getData})
        
    } catch (error) {

           console.log(error.message);
        
        res.status(500).json({msg:error})
        
    }

}


export const getOneData = async (req,res)=>{


    try {

        const {userid} = req.params

        const findByone = await crudModel.findById(userid)

        res.status(200).json({findByone})
        
    } catch (error) {


             console.log(error.message);
        
        res.status(500).json({msg:error})
        
    }


}


export const updateDatas = async (req,res)=>{


    try {

       const {userid} = req.params
       const {username,userage} = req.body

       console.log(userid);

       console.log(username,userage);
       
       

       const updatenew = await crudModel.findByIdAndUpdate(userid,{username,userage},{returnDocument:"after",runValidators:true})

     console.log(updatenew);
     
       res.status(200).json({msg:"Successfully upated"})
        
    } catch (error) {

              console.log(error.message);
        
        res.status(500).json({msg:error})
        
    }


      


}


export const deletedatas = async(req,res)=>{


    try {
       
        const {userid} = req.params
        const deleteget = await crudModel.findOneAndDelete(userid)

        res.status(200).json({msg:"deleted Successfully on database"})
        
    } catch (error) {


              console.log(error.message);
        
        res.status(500).json({msg:error})
    
    
    
    }

}