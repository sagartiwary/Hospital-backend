
const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(token){
        try {
            let decoded=jwt.verify(token,"sagar");
            if(decoded){
                next()
            }else{
                res.status(200).json({msg:"Invalid token"})
            }
        } catch (error) {
            
        }
    }else{
        res.status(400).json({msg:"Wrong credentials"})
    }
}

module.exports={
    auth
}