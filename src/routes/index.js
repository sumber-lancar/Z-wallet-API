const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const authRouter = require('./authRouter')
<<<<<<< HEAD
const userRouter = require('./userRouter');

//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter) //endpoint auth
mainRouter.use("/user", userRouter)

=======
const transactionRouter = require('./transactionRouter')
const transferRouter = require ('./transferRouter')
//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/auth", authRouter) //endpoint auth
mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/transfer", transferRouter)
>>>>>>> agung-auth
module.exports = mainRouter