const express= require ('express')
const topupController = require ('../controllers/topup')
const topupRouter = express.Router()

topupRouter.patch('/topupBalance', topupController.topupBalance)

module.exports = topupRouter