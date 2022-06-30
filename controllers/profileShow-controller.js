
const persons = require("../models/persons")

const profileshow = (req,res)=>{
    persons.find({}).sort({code_id:-1}).limit(1).exec((err,doc)=>{//ค้นหาค่าในฟิลด์ code_id ที่มีค่ามากที่สุด ผลลัพท์เก็บไว้ในตัวแปร doc
        res.render("profileshow",{
            data:doc})
    })
}

module.exports = profileshow


// const getLastID =  () =>{
//     //const lastID = await personID.find({}).sort({code_id:-1}).limit(1)
//     const lastID = personID.find({code__id:101})
//     if (!lastID){
//         const data = {code__id:0, Fname:"No data", Lname:"No data", e_mail:"No data", loginStatuse:false}
//         return data
//     } else {
//         const data = {code_id:lastID.code_id, Fname:lastID.Fname, Lname:lastID.Lname,
//         e_mail:lastID.e_mail, loginStatuse:true}
//         return data
//     }
// }

// const profileshow = (req,res,next) => {
//     const datas = getLastID()    
//     console.log(getLastID())
//     res.render("profileshow",{
//         data :{
//             pageName:"Profile Display Page",
//             message: "แสดงข้อมูลสมาชิกคนล่าสุด",
//             class: "alert alert-primary",
//             code_id:datas.code__id,
//             Fname:datas.Fname,
//             Lname: datas.Lname,
//             e_mail:datas.e_mail,
//             loginStatuse: datas.loginStatuse
//         }
//     })
// }


