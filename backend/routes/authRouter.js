const express=require('express')
const router=express.Router()
const {doSignup,userLogin}=require('../controller/authcontroller')
const {userLogout}=require('../controller/userController')
const {userAuth}=require('../middleware/useAuth')
router.post('/register',doSignup)
router.post('/login',userLogin)
router.get('/logout',userAuth,userLogout)
module.exports=router