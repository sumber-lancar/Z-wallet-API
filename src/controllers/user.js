const userModel = require('../models/user')
const fs = require('fs')

module.exports = {
  getSingleUser: (req, res) => {
    const { id } = req.params
    userModel.getSingleUser(id)
      .then((result) => {
        res.status(result.status).json(result)
      }).catch((error) => {
        res.status(error.status).json(error)
      })
  },
  ChangePersonalInfo: (req, res) => {
    const { body } = req
    console.log(req)
    const { id } = req.decodedToken
    userModel.userChangeInfo(body, id)
      .then((result) => {
        res.status(result.status).json(result)
      }).catch((error) => {
        res.status(error.status).json(error)
      })
  },
  ChangePhotoProfile: (req, res) => {
    const { id } = req.decodedToken
    const image = req.filePath
    userModel.getOldPhoto(id)
      .then((result) => {
        const imageToDelete = result.image
        userModel.updatePhoto(image, id)
          .then((result) => {
            if (imageToDelete != '/images/default.jpg') {
              fs.unlink(`public${imageToDelete}`, (err) => {
                if (err) {
                  console.log(err)
                  return
                } else {
                  console.log(`public${image} deleted`)
                }
              })
            }
            res.status(result.status).json(result)
          }).catch((error) => {
            res.status(error.status).json(error)
          })
      }).catch((error) => {
        res.status(error.status).json(error)
      })
  },
}