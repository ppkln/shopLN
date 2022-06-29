const express = require("express")
const app = express()
const myroute = require("./routes/myroute")
const mongoose = require('mongoose')
const bodyParser =require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(myroute)

app.set("view engine","ejs")
app.set("views","views")

//"mongodb://localhost:27017/LNdataDB"
mongoose
    .connect("mongodb+srv://Nueng80:Neung9426251223@clusterln1.7vsde.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=> console.log("Connected to MongoDB..."))
    .catch(err=>console.log("Cannot connect to MongoDB",err))

const port = process.env.port || 3000
app.listen(port,function(){
    console.log("Listening on port : ", port)
    
})