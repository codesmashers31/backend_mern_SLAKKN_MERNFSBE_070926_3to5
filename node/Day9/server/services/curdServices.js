import crudModel from "../models/curdModels.js"

export const createCrud = async(data)=>{

    console.log('====================================');
    console.log('data',data);
    
    console.log('====================================');

    return await crudModel.create(data)

}