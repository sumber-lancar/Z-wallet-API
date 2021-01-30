const express = require('express')
const authController = require ('../controllers/auth')
const authRouter = express.Router()

const verifyToken = require('../helpers/middlewares/checkToken')
authRouter.post("/login", authController.login)
authRouter.post("/signup",verifyToken.isRegistered, authController.signup)
authRouter.post("/resend", authController.resend)
authRouter.get("/activate/:email/:otp",authController.activate)
authRouter.post("/forgot-password", authController.forgot) //send otp to email
authRouter.get("/check-otp/:email/:otp", authController.otp) //check otp and email to reset password
authRouter.patch("/reset-password", authController.reset) //reset the password
authRouter.patch('/change-password', authController.changePassword) //change old password to new passw
authRouter.post("/logout",verifyToken.isLogin, authController.logout)

authRouter.patch('/setPIN',verifyToken.isLogin, authController.SetPIN)



module.exports = authRouter