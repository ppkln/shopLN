const products = require("../models/productDoc")
const deleteP = (req,res,next)=>{
    products.findByIdAndDelete(req.params.id,{useFindAndModify:false}).exec(err=>{
        if(err) {
            console.log(err)
        } else{
            products.find({}).exec((err,doc)=>{
                if (err) console.log(err)
                res.render("manage",{products:doc})
            })
        }
    })
}
module.exports = deleteP