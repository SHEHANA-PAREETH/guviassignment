const jwt = require('jsonwebtoken')

const userAuth=(req,res,next)=>{
  
    const token=req?.headers['authorization']?.split(' ')//to get token with bearer string first

    console.log(jwt.decode(token[1]));
    const decodedToken=jwt.decode(token[1]);//get the user details
 if(decodedToken)//user exists
    
    {
       req.userId=decodedToken.userId //userid from jwtio website assigned to the req object
       next()
    }
    else{
    res.status(401).json({token:'invalid'})
    }   
    

}
module.exports={userAuth}