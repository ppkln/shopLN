const home = (req,res,next)=>{
    res.render("home",{
        data : {
            pageName : "Home Page",
            message : "สวัสดี",
            class : "alert alert-primary",
            loginStatus : false
        }
    })
}
module.exports = home
