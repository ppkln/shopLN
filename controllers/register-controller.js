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
