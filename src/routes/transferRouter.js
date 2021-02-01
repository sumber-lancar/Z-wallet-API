
const express = require('express')
const transferController = require ('../controllers/transfer')
const transferRouter = express.Router()

const checkToken = require ('../helpers/middlewares/checkToken')

transferRouter.post('/newTransfer', checkToken.isLogin, checkToken.isPIN, transferController.transferBalance )
transferRouter.get('/search', checkToken.isLogin, transferController.searchReceiver)
transferRouter.get('/userContact',checkToken.isLogin, transferController.getAllContact )


module.exports = transferRouter