const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const authRouter = require('./authRouter')
const transactionRouter = require('./transactionRouter')
const transferRouter = require ('./transferRouter')
//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter) //endpoint auth
mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/transfer", transferRouter)
module.exports = mainRouter