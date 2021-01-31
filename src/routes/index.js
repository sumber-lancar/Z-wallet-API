const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const authRouter = require('./authRouter')
const userRouter = require('./userRouter');

//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter) //endpoint auth
mainRouter.use("/user", userRouter)

module.exports = mainRouter