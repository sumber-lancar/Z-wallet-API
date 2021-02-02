const transferModel = require('../models/transfer')

module.exports = {
    transferBalance: (req, res) => {
        const sender = req.decodedToken.id
        const { receiver, amount, notes } = req.body
        transferModel.postNewTransfer(sender, receiver, amount, notes)
            .then((result) => {
                const {details} = result
                Promise.all([
                    transferModel.reduceBalance(sender, amount),
                    transferModel.increaseBalance(receiver, amount)
                ]).then((result) => {
                    res.status(200).json({
                        ...result[1],
                        details
                    })
                }).catch((error) => {
                    res.status(error.status).json(error)
                })
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    searchReceiver: (req, res) => {
        const { name } = req.query
        const { id } = req.decodedToken
        transferModel.searchReceiver(name, id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getAllContact: (req, res) => {
        const { id } = req.decodedToken
        transferModel.getAllContact(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getDetailTransfer: (req, res) => {
        const { id } = req.params
        transferModel.getDetailTransfer(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
}