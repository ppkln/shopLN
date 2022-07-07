const products = require("../models/productDoc")
const editeProduct = (req,res,next)=>{
    const edit_idPro = req.body.edit_idPro
    products.findOne({_id:edit_idPro}).exec((err,doc)=>{
       // console.log("ข้อมูลใน doc คือ ",doc)
        res.render("productEditform",{products:doc})
    })
}
module.exports = editeProduct