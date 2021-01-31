const db = require("../config/mySQL");
const bcrypt = require("bcrypt");

module.exports = {
  getDataUser: (req) => {
    const { id } = req.params;
    return new Promise((resolve, reject) => {
      const queryStr = "SELECT id, CONCAT(firstName, ' ', lastName) as fullName, email, pin, photo, phone,balance, isActive FROM users WHERE id = ?";
      db.query(queryStr, id, (err, data) => {
        console.log(id);

        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  userUpdate: (id, setUpdate) => {
    console.log(setUpdate);
    return new Promise((resolve, reject) => {
      const queryStr = "UPDATE users SET " + setUpdate + "WHERE id = ?";
      db.query(queryStr, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
// createPinUser: (body) => {
//   return new Promise((resolve, reject) => {
//     let saltRounds = 10;
//     bcrypt.genSalt(saltRounds, (err, salt) => {
//       if (err) {
//         reject(err);
//       }
//       bcrypt.hash(body.pin_user, salt, (err, hashedPin) => {
//         if (err) {
//           reject(err);
//         }
//         const newBody = {
//           ...body,
//           pin_user: hashedPin,
//         };
//         const queryStr = "INSERT INTO users SET pin_user = ? WHERE id_user = ?";
//         db.query(queryStr, newBody, (err, data) => {
//           if (!err) {
//             resolve(data);
//           } else {
//             reject(err);
//           }
//         });
//       });
//     });
//   });
// },
