
const express= require('express')
const transactionController = require ('../controllers/transaction')
const checkToken = require('../helpers/middlewares/checkToken')
const transactionRouter = express.Router()

transactionRouter.get('/getBalance', checkToken.isLogin, transactionController.getBalance)
transactionRouter.get('/getInvoice', checkToken.isLogin, transactionController.getInvoice)
transactionRouter.get('/getAllInvoice', checkToken.isLogin, transactionController.getAllInvoice)


module.exports = transactionRouter