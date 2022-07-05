const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const productSchema = mongoose.Schema({
    productId : {type:String, require:true, unique:true},
    productName : String,
    productPrice : Number,
    productImages: String,
    productDescript : String
})
productSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Products",productSchema)

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}