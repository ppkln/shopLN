const express = require("express")
const router = express.Router()

const homeController = require("../controllers/home-controller")
const registerController = require("../controllers/register-controller")
const profileshowcontroller = require("../controllers/profileShow-controller")
const productshowcontroller = require("../controllers/productshow-controller")
const deletecontroller = require("../controllers/delete-controller")
const productdetailcontroller = require("../controllers/productdetail-controller")
const editProcontroller = require("../controllers/editPro-controller")
const editProductDBcontroller = require("../controllers/editProductDB-controller")

//สำหรับอัพโหลดไฟล์ภาพ
const products = require("../models/productDoc") 
const multer = require("multer") //เรียกใช้งาน multer
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/products")//ตำแหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg") //เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
})
//คำสั่งเรื่อมอัพไฟล์
const uploadProduct = multer({
    storage:storage
})

//สิ้นสุดคำสั่งเพื่ออัพโหลดภาพ
router.get("/",homeController)
router.get("/register",registerController.register)
router.get("/profileshow",profileshowcontroller)
router.get("/productshow",productshowcontroller)
router.get("/insertProductform",(req,res,next) =>{
        res.render("insertProductform")
})
router.get("/manage",(req,res)=>{
        products.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
})
router.get("/delete/:id",deletecontroller)
router.get("/productdetail/:id",productdetailcontroller)
router.get("/login",(req,res,next) => {
    res.render("login")
})

router.post("/register",registerController.postRegister)
router.post("/editProduct",editProcontroller)
router.post("/editProductDB",editProductDBcontroller)

router.post("/insertproductToDB",uploadProduct.single("productImage"),(req,res)=>{
    let data = new products ({
        productId : req.body.productId,
        productName : req.body.productName,
        productPrice : req.body.productPrice,
        productImages : req.file.filename,
        productDescript : req.body.productDescription
    })
    products.saveProduct(data,(err)=>{
        if(err) {
            res.render("home",{
                data:{
                    message:"บันทึกข้อมูลสินค้าไม่สำเร็จ"
                }
            })
        }else {
            res.render('home',{
                data:{
                    message : "บันทึกข้อมูลสินค้าเรียบร้อยแล้ว"
                }
            })
        }
    })    
})



module.exports = router