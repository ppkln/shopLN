const products = require("../models/productDoc")
const insertProductform = (req,res,next) =>{
    res.render("insertProductform")
}
module.exports.insertProductform = insertProductform
