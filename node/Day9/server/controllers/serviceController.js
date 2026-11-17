
import * as service from '../services/curdServices.js'

export const addDatas = async (req,res)=>{

    try {

        // console.log(req);
        
        const insert = await service.createCrud(req.body)

        res.status(201).json({msg:"Success",insert})
    } catch (error) {

        res.status(500).json({msg:"Error"})
        console.log(error);
        
        
    }


}
