const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const port = 5000
const mongoose = require("mongoose")
const { signup } = require('./controllers/authController')
const dbUrl = process.env.connectionString
console.log(dbUrl);
mongoose.connect(dbUrl)
const db = mongoose.connection
db.once("open",()=>{
    console.log("MongoDB Connect");
    
})
db.on("error",()=>{
    console.log("Connect error");
    
})


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.get('/',(req,res)=>{
//     res.send("First API get")
// })

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const {email , password} = req.body

//     res.send({
//         email,password
//     })
// })

app.get('/signup',signup)

app.listen(port,()=>{
    console.log(`App run on port ${port}`);
    
})