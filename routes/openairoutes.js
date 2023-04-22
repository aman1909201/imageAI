const express=require('express')
const {generateimage}=require('../controllers/openaicontroller')
const routes=express.Router()

routes.post('/generateimage', generateimage)
module.exports=routes