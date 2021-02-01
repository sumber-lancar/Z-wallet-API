const { query } = require('express')
const db = require('../config/mySQL')

module.exports = {
    getBalance: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr =
                `SELECT u.id, CONCAT(u.firstname,' ', u.lastname) as name ,u.phone, b.balance 
            FROM balance b
            JOIN users u ON b.id_user = u.id 
            WHERE u.id = ?`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            data: data[0]
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: `internal server error`,
                        details: err
                    })
                }
            })
        })
    },
    getInvoice: (id, additionalQuery, flow) => {
        let user = ''
        if (flow == 'out') {
            user = 't.sender'
        } else {
            user = 't.receiver'
        }
        return new Promise((resolve, reject) => {
            const queryStr =
                `SELECT t.id,t.sender, CONCAT(u.firstname,' ',u.lastname) as sender, t.receiver, CONCAT(us.firstname,' ', us.lastname) as receiver, t.amount,t.notes, t.type, t.created_at
            FROM transfer t
            JOIN users u ON u.id = t.sender
            JOIN users us ON us.id = t.receiver
            WHERE ${user} = ? AND t.type = '${flow}'
            ${additionalQuery}
            ORDER BY t.created_at DESC
            LIMIT 7 OFFSET 0
            `
            console.log(queryStr)
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            message: `Daftar transaksi ditemukan`,
                            data: data
                        })
                    } else {
                        resolve({
                            status: 200,
                            message: `Daftar transaksi tidak ditemukan`,
                            data: []
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: 'internal server error',
                        details: err
                    })
                }
            })
        })
    },
}