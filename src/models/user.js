const db = require("../config/mySQL");
const bcrypt = require("bcrypt");
const { query } = require("express");

module.exports = {
  getSingleUser: (id) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT CONCAT(firstname,' ',lastname) as name, phone, photo FROM users WHERE id = ?`;
      db.query(queryStr, id, (err, data) => {
        if (!err) {
          resolve({
            status: 200,
            data: data[0],
          });
        } else {
          reject({
            status: 500,
            message: err,
          });
        }
      });
    });
  },
  userChangeInfo: (body, id) => {
    //includes all userData (PIN, PhoneNumber, and etc.)
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET ? WHERE id = ?`;
      db.query(queryStr, [body, id], (err, data) => {
        if (!err) {
          resolve({
            status: 200,
            message: `Data berhasil diubah`,
            data: body,
          });
        } else {
          reject({
            status: 500,
            message: err,
          });
        }
      });
    });
  },
  getOldPhoto: (id) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT photo FROM users WHERE id = ?`;
      db.query(queryStr, id, (err, data) => {
        if (!err) {
          if (data.length > 0) {
            resolve({
              status: 200,
              image: data[0].photo,
            });
          } else {
            reject({
              status: 404,
              image: "",
            });
          }
        } else {
          reject({
            status: 500,
            message: "Internal server error",
            details: err,
          });
        }
      });
    });
  },
  updatePhoto: (image, id) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET photo = ? WHERE id = ?`;
      db.query(queryStr, [image, id], (err, data) => {
        if (!err) {
          resolve({
            status: 200,
            message: "Berhasil mengubah photo profil",
          });
        } else {
          console.log(err);
          reject({
            status: 500,
            message: "internal server error",
            details: err,
          });
        }
      });
    });
  },
};
