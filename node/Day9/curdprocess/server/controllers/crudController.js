import crudModel from "../models/crudModel.js"

export const addDatas = async (req,res)=>{

     
    try {
        const {username,userage} = req.body

        if(!username || !userage){
            res.status(404).json({msg:"Please fill the all datas"})
            return
        }


        if(userage < 18) {
            res.status(404).json({msg:"Abive 18 only"})
            return
        }

        const add = await crudModel.create({username,userage})

        res.status(201).json({msg:"Successfyully done"})
    } catch (error) {


        console.log(error);
        
        
    }


}