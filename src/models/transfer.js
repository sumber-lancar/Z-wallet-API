const db = require('../config/mySQL')

module.exports = {
    postNewTransfer: (sender, receiver, amount, notes) => {
        return new Promise((resolve, reject) => {
            let dataTransfer = {
                sender: sender,
                receiver: receiver,
                amount: amount,
                notes:notes,
                type: 'in',
                created_at:new Date(Date.now())
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
                                message: `Transfer sukses`,
                                details: dataTransfer
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
    },
    getTranferDetails: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr =
                `SELECT t.id,t.sender as sender_id, CONCAT(u.firstname,' ',u.lastname) as sender,u.phone as sender_phone, u.photo as sender_photo, t.receiver as receiver_id, CONCAT(us.firstname,' ', us.lastname) as receiver,us.phone as receiver_phone, us.photo as receiver_photo, t.amount,t.notes, t.type, t.created_at
            FROM transfer t
            JOIN tb_user u ON u.id = t.sender
            JOIN tb_user us ON us.id = t.receiver
            WHERE t.id = ?`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        data: data[0]
                    })
                } else {
                    reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err
                    })
                }
            })
        })
    }
}