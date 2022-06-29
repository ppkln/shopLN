const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home-controller")
const registerController = require("../controllers/register-controller")
const profileshowcontroller = require("../controllers/profileShow-controller")

router.get("/",homeController)
router.get("/register",registerController.register)
router.get("/profileshow",profileshowcontroller)

router.post("/register",registerController.postRegister)

module.exports = router