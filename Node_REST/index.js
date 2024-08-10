require('dotenv').config()
const bodyParser = require('body-parser')
const express=require('express')
const userRoutes=require('./routes/users.js')

const app=express()
app.use(bodyParser.json())

app.use('/users',userRoutes)

app.listen('5000',()=>{
    console.log('server running at http://localhost:5000')
})