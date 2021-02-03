const topupModel = require('../models/topup')

module.exports = {
    topupBalance: (req, res) => {
        let { phone, amount } = req.body
        phone = phone.toString().replace('23890', '+62')
        topupModel.getIdUser(phone)
            .then((result) => {
                const topupCenter = 1 //hardcoded
                const myId = result.data
                console.log(myId)
                Promise.all([
                    topupModel.insertTranfer(topupCenter, result.data, amount),
                    topupModel.topupBalance(result.data, amount)
                ]).then((result) => {
                    if(global.io.to(myId).emit("transfer in", 'Top Up Berhasil')){
                        console.log('sukses')
                    }
                    console.log(myId)
                    res.status(result[1].status).json({
                        ...result[1],
                        message: `Saldo ${phone} bertambah Rp.${amount}`
                    })
                }).catch((error) => {
                    res.status(error.status).json(error)
                })
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}