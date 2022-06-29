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
    const hash = await bcrypt.hash(personObj.pwd,5)
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
    const personObj = {
        Fname:req.body.Fname,
        Lname:req.body.Lname,
        address_p:req.body.address_p,
        mobile:req.body.mobile,
        e_mail:req.body.e_mail,
        pwd:req.body.pwd,
        age:req.body.age      
        
    }
    addPerson(personObj)
        .then(()=>{
            const success = 'ลงทะเบียนสำเร็จเรียบร้อยแล้ว' 
            res.render("profile",{
                data:{
                    pageName:"Profile Page",
                    message : success,
                    Fname: personObj.Fname,
                    Lname:personObj.Lname,
                    isPerson : personObj.e_mail,
                    class:"alert alert-primary"
                }
            })
        })
        .catch(err=>{
            res.status(401).render("register",{
                data:{
                    pageName: "Register",
                    message: "e-mail นี้มีการใช้งานในระบบอยู่แล้ว",
                    class:"alert alert-danger"
                }
            })
        })

  }
  module.exports.postRegister = postRegister