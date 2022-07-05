const products = require("../models/productDoc")
const productshow = (req,res,next)=>{
    products.find({}).exec((err,doc)=>{
        //console.log(doc)
        res.render("Productshow",{products:doc})
    })
}
module.exports = productshow
