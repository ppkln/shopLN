const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home-controller")
const registerController = require("../controllers/register-controller")

router.get("/",homeController)
router.get("/register",registerController.register)


module.exports = router