const express = require('express')
const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')
const path = require('path')
const port = 4444

const app = express()
app.use(express.static(__dirname))


mongoose.connect('mongodb://127.0.0.1:27017/FREE')
const db = mongoose.connection
db.once('open',()=>{console.log("mongobd done")})

app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'index.html'))})




app.listen(port,()=>{console.log("Server started")})