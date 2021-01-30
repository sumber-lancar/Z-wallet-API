const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const authRouter = require('./authRouter')

//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter) //endpoint auth

module.exports = mainRouter