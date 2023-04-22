const path= require('path')
const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5001

const app=express()

// enable body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai',require('./routes/openairoutes'))
app.listen(port,()=>
console.log(`server started on port ${port}`))