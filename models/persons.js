const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const personSchema = mongoose.Schema({
 
    Fname:{type:Strinq, require:true},
    Lname:{type:String, require:true},
    e_mail:{type:String, require:true, unique:true},
    age:{type:String},
    address_p:{String},
    mobile:{String}
})
personSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Persons",personSchema)