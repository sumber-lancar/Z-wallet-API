const userModel = require("../models/user");
const form = require("../helpers/form");
// const { raw } = require("mysql");

module.exports = {
  getUserData: (req, res) => {
    userModel
      .getDataUser(req)
      .then((data) => {
        if (data.length) {
          res.json({
            status:200,
            data,
          });
        } else {
          res.status(404).json({
            msg: "User Not Found",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  userUpdate: (req, res) => {
    let photo = null;
    let SERVER = "http://localhost:8000"
    if (req.files.img) {
      photo = JSON.stringify(
        req.files.img.map((e) => SERVER + "/images/" + e.filename)
      );
    }
    console.log(photo);
    const { body } = req;
    const { id } = req.params;

    // set for update
    const entry = Object.entries(body);

    let rawSetUpdated = "";

    if (req.files.img && req.files.img.length !== 0) {
      console.log("true");
      rawSetUpdated += `photo = '${photo}',`;
    }
    entry.forEach((entry) => {
      let key = entry[0];
      let value = entry[1];
      rawSetUpdated += `${key} = '${value}' ,`;
    });
    const setUpdate = rawSetUpdated.slice(0, -2) + " ";
    console.log(setUpdate);
    userModel
      .userUpdate(id, setUpdate)
      .then((data) => {
        res.status(200).json({
          msg: "Data Successfully Updated",
          data: body,
          photo,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

//   createPinUser: (req, res) => {
//     const { body } = req;
//     userModel
//       .createPin(body)
//       .then((data) => {
//         res.status(200).json({
//           msg: "Pin Created Successfully",
//           data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//           msg: "Internal Server Error",
//           err,
//         });
//       });
//   },
// };
