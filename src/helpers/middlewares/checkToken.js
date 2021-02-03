const jsonwebtoken = require('jsonwebtoken')
const db = require('../../config/mySQL')
const form = require('../form')


module.exports = {
  isRegistered: (req, res, next) => {
    const { email } = req.body
    const checkAvailable = new Promise((resolve, reject) => {
      const queryStr = `SELECT email FROM users WHERE email = ?`
      db.query(queryStr, email, (err, data) => {
        if (!err) {
          if (!data[0]) {
            resolve({
              msg: `success`
            })
          } else {
            reject({
              msg: `email telah digunakan!`
            })
          }
        } else {
          reject({
            msg: `SQLquery ERROR!`,
            details: err
          })
        }
      })
    }).then((result) => {
      next()
    }).catch((error) => {
      res.status(500).json(error)
    })
  },
  isLogin: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    //jika tidak ada header x-access-token
    if (!bearerToken) {
      res.json({
        msg: `Please login first`,
        status: 401 //unauthorized access
      })
    } else {
      // Bearer Token
      // [Bearer, Token]
      const token = bearerToken.split(" ")[1]
      const checkBlacklist = new Promise((resolve, reject) => {
        const queryStr = `SELECT token FROM blocklist_token WHERE token = ?`
        db.query(queryStr, token, (err, data) => {
          if (!err) {
            if (!data[0]) {
              console.log('a')
              resolve(token)
            } else {
              console.log('b')
              reject({
                msg: `Invalid token => ${data[0].token}. Already logout`
              })
            }
          } else {
            console.log('c')
            reject({
              msg: `check Token ERROR!`
            })
          }
        })
      }).then((result) => {
        //cek decodedToken apakah cocok
        try {
          console.log(result)
          const decodedToken = jsonwebtoken.verify(result, process.env.SECRET_KEY)
          //asign decodedToken to req
          req.decodedToken = decodedToken
          next() //meneruskan ke proses selanjutnya
        } catch (err) {
          res.json({
            msg: `Token invalid, wrong SECRET_KEY`
          })
        }
      }).catch((error) => {
        res.json(error)
      })
    }
  },
  isSeller: (req, res, next) => {
    const { level } = req.decodedToken
    if (level != 2) {
      form.error(res,
        {
          status: 401,
          msg: `Unauthorized Access`,
          details: `Yout dont have permission to access this page.`
        }
      )
    } else {
      next()
    }
  },
  phoneUsed: (req, res, next) => {
    const { phone } = req.body
    console.log(req.body)
    if (phone != undefined) {
      const checkAvailable = new Promise((resolve, reject) => {
        const queryStr = `SELECT phone FROM users WHERE phone = ?`
        db.query(queryStr, phone, (err, data) => {
          if (!err) {
            if (data.length > 1) {
              reject({
                status: 401,
                message: `No. HP sudah digunakan`
              })
            } else {
              resolve({
                status: 200
              })
            }
          } else {
            reject({
              status: 500,
              message: `INTERNAL SERVER ERROR`,
              details: err
            })
          }
        })
      }).then((result) => {
        next()
      }).catch((error) => {
        res.status(error.status).json(error)
      })
    } else {
      next()
    }
  },
  isPIN: (req, res, next) => {
    const email = req.decodedToken.email
    const PIN = req.header("x-access-PIN")
    if (!PIN) {
      res.status(401).json({
        status: 401,
        message: `invalid PIN`
      })
    } else {
      const checkPIN = new Promise((resolve, reject) => {
        const queryStr = `SELECT * FROM users WHERE email = ? AND pin = ?`
        db.query(queryStr, [email, PIN], (err, data) => {
          if (!err) {
            if (data.length > 0) {
              resolve({
                status: 200
              })
            } else {
              reject({
                status: 404,
                message: `PIN tidak teridentifikasi`
              })
            }
          } else {
            reject({
              status: 500,
              message: err
            })
          }
        })
      }).then((result) => {
        next()
      }).catch((error) => {
        res.status(error.status).json(error)
      })
    }
  }
}