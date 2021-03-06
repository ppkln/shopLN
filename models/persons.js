const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const personSchema = mongoose.Schema({
    code_id:Number,
    Fname:{type:String, require:true},
    Lname:{type:String, require:true},
    address_p:String,
    mobile:String,
    e_mail:{type:String, require:true, unique:true},
    pwd:{type:String, require:true},
    age:Number    
},{versionKey: false})
personSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Persons",personSchema)