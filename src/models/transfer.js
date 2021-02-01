const db = require('../config/mySQL')

module.exports = {
    postNewTransfer: (sender, receiver, amount, notes) => {
        return new Promise((resolve, reject) => {
            let dataTransfer = {
                sender: sender,
                receiver: receiver,
                amount: amount,
                notes:notes,
                type: 'in'
            }
            const queryStr = `INSERT INTO transfer SET ?`
            db.query(queryStr, dataTransfer, (err, data) => {
                if (!err) {
                    dataTransfer = {
                        ...dataTransfer, type: 'out'
                    }
                    const queryStr = `INSERT INTO transfer SET ?`
                    db.query(queryStr, dataTransfer, (err, data) => {
                        if (!err) {
                            resolve({
                                status: 200,
                                message: `Transfer sukses`
                            })
                        } else {
                            reject({
                                status: 500,
                                message: `internal server error`,
                                details: err
                            })
                        }
                    })
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
    increaseBalance: (receiver, amount) => {
        return new Promise((resolve, reject) => {
            const queryStr = `UPDATE balance SET balance = balance+${amount} WHERE id_user = ?`
            db.query(queryStr, receiver, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: `berhasil`
                    })
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
    reduceBalance: (sender, amount) => {
        return new Promise((resolve, reject) => {
            const queryStr = `UPDATE balance SET balance = balance-${amount} WHERE id_user = ?`
            db.query(queryStr, sender, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: `berhasil`
                    })
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
    searchReceiver: (name, id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT id, CONCAT(firstname,' ',lastname) as name, phone, photo FROM users WHERE CONCAT(firstname, lastname) LIKE '%${name}%' AND NOT id = ${id}`
            db.query(queryStr,(err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            message: `Pencarian untuk ${name} ditemukan`,
                            data: data
                        })
                    } else {
                        reject({
                            status: 404,
                            message: `Pencarian tidak ditemukan`,
                            data: []
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
    getAllContact: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT id, CONCAT(firstname,' ',lastname) as name, phone, photo FROM users WHERE NOT id = ? AND isActive = 1`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            data: data
                        })
                    } else {
                        reject({
                            status: 404,
                            data: []
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
    }
}