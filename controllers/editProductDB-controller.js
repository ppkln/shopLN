const products = require("../models/productDoc")

    const editProductToDB = (req,res)=>{
        const edit_idPro = req.body.edit_idPro
        let data = {
            productId : req.body.productId,
            productName : req.body.productName,
            productPrice : req.body.productPrice,
            productDescript : req.body.productDescription
        }
        //console.log("ข้อมูล edit_idPro คือ ",edit_idPro)
        products.findByIdAndUpdate(edit_idPro,data,{useFindAndModify:false}).exec(err=>{
            if(err) {
                res.render("home",{
                    data:{
                        message:"แก้ไขข้อมูลสินค้าไม่สำเร็จ"
                    }
                })
            }else {
                res.render('home',{
                    data:{
                        message : "แก้ไขข้อมูลสินค้าเรียบร้อยแล้ว"
                    }
                })
            }
        })    
    }
module.exports = editProductToDB

