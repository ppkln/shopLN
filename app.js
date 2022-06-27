const express = require("express")
const app = express()
const myroute = require("./routes/myroute")
const mongoose = require('mongoose')

app.use(myroute)

app.set("view engine","ejs")
app.set("views","views")



mongoose
    .connect("mongodb://localhost:27017/LNdataDB",{useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=> console.log("Connected to MongoDB..."))
    .catch(err=>console.log("Cannot connect to MongoDB",err))

const port = process.env.port || 3000
app.listen(port,function(){
    console.log("Listening on port : ", port)
    
})