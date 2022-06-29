const Person = require("../models/persons")
const User = require("../models/users")
const bcrypt = require("bcryptjs")


const register = (req,res,next) => {
    res.render("register",{
        data:{
            pageName:"Register",
            message:"ลงทะเบียนสมาชิก (Register)",
            class:"alert alert-warning"
        }
    })
}
module.exports.register = register

// ฟังก์ชันสำหรับหาว่าตอนนี้มีจำนวนผู้ที่ลงทะเบียนกี่คนแล้ว
//const getCodeIDNum = () =>{
//    const personNum =  Person.aggregate({$group:{_id:null, code_id:{$count:{}}}})
//      if(personNum.code_id == 0 || !personNum){
//         return personNum.code_id = 1
//     } else{
//          return personNum.code_id
//      }
//   }
  
  //ฟังก์ชันเพิ่มข้อมูลสมาชิกลงฐานข้อมูล
  const addPerson = async personObj =>{
    const Numperson = 100
    const hash = await bcrypt.hash(personObj.pwd,20)
    const person = new Person({
        code_id: Numperson,
        Fname: personObj.Fname,
        Lname: personObj.Lname,
        address_p: personObj.address_p,
        mobile: personObj.mobile,
        e_mail: personObj.e_mail,
        pwd: hash,
        age: personObj.age
        
      })
      const data = await person.save()
      return data
  }

  //เริ่ม module ดำเนินการเพิ่มข้อมูลสมาชิกใส่ลงในฐานข้อมูล
  const postRegister = (req,res,next) =>{
    const fname = req.body.Fname
    const lname = req.body.Lname
    const e_mail = req.body.e_mail
    const pwd = req.body.pwd
    const age = req.body.age
    const address_p = req.body.address_p
    const mobile = req.body.mobile
    const personObj = {
        Fname:fname,
        Lname:lname,
        address_p:address_p,
        mobile:mobile,
        e_mail:e_mail,
        pwd:pwd,
        age:age      
        
    }
    addPerson(personObj)
        .then(()=>{
            const success = 'ลงทะเบียนสำเร็จเรียบร้อยแล้ว'
            res.render("profile",{
                data:{
                    pageName:"Profile",
                    message : success,
                    isPerson : personObj.e_mail,
                    mobiles:personObj.mobile,
                    addresss:personObj.address_p,
                    class:"alert alert-primary"
                }
            })
        })
        .catch(err=>{
            res.status(401).render("register",{
                data:{
                    pageName: "Register",
                    message: err,
                    class:"alert alert-danger"
                }
            })
        })

  }
  module.exports.postRegister = postRegister