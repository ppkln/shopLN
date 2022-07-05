const products = require("../models/productDoc")
const manage = (req,res,next)=>{
    products.find({}).exec((err,doc)=>{
        //console.log(doc)
        res.render("manage",{products:doc})
    })
}
module.exports = manage