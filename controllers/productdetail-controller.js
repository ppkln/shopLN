const products = require("../models/productDoc")
const productdetail = (req,res,next)=>{
    const pro_edit = req.params.id
    products.findOne({_id:pro_edit}).exec((err,doc)=>{
        //console.log(doc)
        res.render("productDetail",{products:doc})
    })
}
module.exports = productdetail