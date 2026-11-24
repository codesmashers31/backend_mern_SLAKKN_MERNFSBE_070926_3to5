import jwt from 'jsonwebtoken'
export const verifyToken = (req,res,next)=>{

    try {
        const headertoken = req.headers.authorization
        //console.log(req);
        
        // console.log(headertoken.authorization);

        if(!headertoken){
            res.status(401).json({msg:"Not a Valid Token"})
            return
        }

        const decoded = jwt.verify(headertoken,process.env.JWT_SECRET)
        
        //console.log(decoded);
        
        req.user = decoded

        next()
        
    } catch (error) {
    
         console.log(error);
         

        res.status(500).json({msg:error})
        
    }


}