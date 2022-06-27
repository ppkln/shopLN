const home = (req,res,next)=>{
    res.render("home",{
        data : {
            pageName : "Home",
            message : "Home page",
            class : "alert alert-primary",
            loginStatus : false
        }
    })
}
module.exports = home
