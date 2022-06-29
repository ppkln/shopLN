const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const userSchema = mongoose.Schema({
    code_id:{type:Number},
    username:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    isWorking:{type:Boolean, default:true}
})
userSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Users",userSchema)