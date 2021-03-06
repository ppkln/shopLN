const express = require("express")
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const myroute = require("./routes/myroute")
const mongoose = require('mongoose')
const bodyParser =require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(myroute)
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())
app.use(session({secret:"mykeysession",resave:false,saveUninitialized:false}))

app.set("view engine","ejs")
app.set("views","views")

// "mongodb+srv://Nueng80:Neung9426251223@clusterln1.7vsde.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect("mongodb://localhost:27017/LNdataDB",{useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=> console.log("Connected to MongoDB..."))
    .catch(err=>console.log("Cannot connect to MongoDB",err))

const port = process.env.port || 3000
app.listen(port,function(){
    console.log("Listening on port : ", port)
    
})