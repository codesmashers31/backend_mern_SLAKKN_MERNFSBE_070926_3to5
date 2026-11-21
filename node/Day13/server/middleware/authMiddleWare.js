import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next)=>{

    try {
        const authHeaders = req.headers.authorization
        
        if(!authHeaders?.startsWith("Bearer ")){
            res.status(401).json({msg:"Bearer token Requeried"})
            return
        }
        
        // Bearer fgsfdgsfdewyjghs765768jzxcgjhzc76z
        const token = authHeaders.split(" ")[1];
        
        if(!token){
            res.status(401).json({msg:"Requeried"})
           return
        }

        const decoded = jwt.verify(token,process.env.JWT_SECURE_KEY,{algorithms:"HS256"});

        console.log(decoded);


        req.user = decoded


        next()
        

    } catch (error) {

        console.log(error);
        
        res.status(500).json({msg:error.message})
        
    }

}