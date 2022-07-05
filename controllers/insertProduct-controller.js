const products = require("../models/productDoc")


const insertProductform = (req,res,next) =>{
    res.render("insertProductform")
}
module.exports.insertProductform = insertProductform



const insertProductToDB = (req,res)=>{
  
}
module.exports.insertProductToDB = insertProductToDB