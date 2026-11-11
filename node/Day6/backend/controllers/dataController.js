let arr = []

export const bodyDatas = async (req,res)=>{
 
 
    try {

      console.log(req);
      

        const {name,mobile} = req.body

        if(!name || !mobile){
            res.status(406).json({msg:"Please Fill the Form"})
            return
        }
     
        
        let obj = {id:Date.now(),name,mobile}
     
        arr.push(obj)

        res.status(200).json({msg:"successfully added",arr})
        
        
    } catch (error) {


        console.log("error.message", error.message);
        


        
    }
   


}


export const paramsDatas = async (req,res)=>{

    
    try {

        console.log(req.params);

        const {userid} = req.params

        if(userid){
            res.status(200).json({msg:"I get the Datas user id",userid})
            return
        }
        
        
    } catch (error) {

        console.log('Error',error);
        
        
    }



}


export const queryDatas = async(req,res)=>{


    try {
        console.log(req.query);
        const {name,mobile,filterbyprice} = req.query


        res.status(200).json({msg:"Success",name,mobile,filterbyprice})
        
    } catch (error) {

        console.log('error',error);
        
        
    }

}


export const headresDatas = (req,res)=>{


    try {
        console.log(req);

        const {token, mydatas,cookie} = req.headers
        

        arr.push(token, mydatas,cookie)
        
         res.status(200).json({msg:"Success",arr})
        
    } catch (error) {
        console.log('error',error);
        
    }

}