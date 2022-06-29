const profileshow = (req,res) => {
    res.render("profileshow",{
        data:{
            pageName : "Profile Display page",
            message : "Profile",
            class : "alert alert-primary",
            loginStatus : false
        }
    })
}
module.exports = profileshow
