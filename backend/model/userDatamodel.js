const mongoose=require('mongoose')

const userDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },

    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
    village:{
        type:String,
        required:true  
    },
    qualification:{
        type:String,
        required:true  
    },
    occupation:{
        type:String,
        required:true  
    },
    profilepic:{
        type:String,
        required:true  
    },
    userId:{
        type:String,
        required:true  
    
    }
    
    
})


module.exports=mongoose.model('datas',userDataSchema)

        
         
        
       
       
          
         
        