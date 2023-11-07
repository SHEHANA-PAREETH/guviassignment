
const USERDATA=require('../model/userDatamodel')
const mongoose=require('mongoose')
const uploadData=(req,res)=>{

    if(req.userId){
        const multer=require('multer')

        const fileStorage=multer.diskStorage({
            destination:(req,file,cb)=>{
                cb(null,'public/uploads')
            },
            filename:(req,files,cb)=>{
                cb(null,Date.now()+"-"+files.originalname)
            }
        })
        const upload=multer({storage:fileStorage}).single("profilepic")
        upload(req,res,(err)=>{
        console.log(req.file);
        console.log(req.body);
        USERDATA({name:req.body.name,
            age:req.body.age,
            dob:req.body.dob,
            city:req.body.city,
            address:req.body.address,//to print user uploading blog
           profilepic:req.file.filename,
           mobileno:req.body.mobileno,
           village:req.body.village,
           qualification:req.body.qualification,
           occupation:req.body.occupation,
           userId:req.userId
        }).save().then((response)=>{
                console.log(response);
                if(response)
                res.json({message:true})
            else
            res.json({message:false})
        })
        })
    }
    else{
        res.status(401).json({token:'invalid'})
        } 

}
const getUserData=(req,res)=>{
    if(req.userId){
        USERDATA.findOne({userId:req.userId}).sort({_id:-1}).
        then((resp)=>{
            console.log(resp);
            if(resp)
            res.json({message:true,data:resp})
        else
        res.json({message:false})
        
        })
    }

else{
    res.status(401).json({token:'invalid'})
    } 
}
const userLogout=(req,res)=>{
    if(req?.userId){
        req.userId=null
        res.json({logout:true})
    }
    else{
        res.status(401).json({token:'invalid'})
        } 
}
module.exports={uploadData,getUserData,userLogout}
