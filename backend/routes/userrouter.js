const express=require('express')
const router=express.Router()
const {uploadData,getUserData}=require('../controller/userController')
const {userAuth}=require('../middleware/useAuth')
router.post('/uploaddata',userAuth,uploadData)
router.get('/getData',userAuth,getUserData)
module.exports=router