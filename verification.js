const jwt = require("jsonwebtoken")

function verifyAdmin(req,res,next){
        const token = req.headers.authorization
        if(token){
         jwt.verify(token,process.env.JWT_SALT_KEY_ADMIN, (error) =>{
            if(error)
            res.send({status:401, result:"Failed", message:"Session Expired ! Please Login Again"})
            else
            next()
         })      
     }
    else
       res.send({status:401, result:"Failed", message:"Unauthorized Activity"})
   }

   function verifyBuyer(req,res,next){
    const token = req.headers.authorization
    if(token){
     jwt.verify(token,process.env.JWT_SALT_KEY_BUYER, (error) =>{
        if(error)
        res.send({status:401, result:"Failed", message:"Session Expired ! Please Login Again"})
        else
        next()
     })      
 }
else
   res.send({status:401, result:"Failed", message:"Unauthorized Activity"})
}

function verifyBoth(req,res,next){
    const token = req.headers.authorization
    if(token){
     jwt.verify(token,process.env.JWT_SALT_KEY_ADMIN, (error) =>{
        if(error){
            jwt.verify(token,process.env.JWT_SALT_KEY_BUYER, (error) =>{
                if(error){
                    res.send({status:401, result:"Failed", message:"Session Expired ! Please Login Again"})
                }
                else
                   next()
             })   
           }
        else
           next()
     })      
 }
else
   res.send({status:401, result:"Failed", message:"Unauthorized Activity"})
}
module.exports = {verifyAdmin:verifyAdmin, verifyBuyer:verifyBuyer, verifyBoth:verifyBoth }