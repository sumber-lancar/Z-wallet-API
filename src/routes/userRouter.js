const express = require("express");
const userController = require("../controllers/user");
const userRouter = express.Router();
const upload = require("../helpers/middlewares/upload");
const verifyToken = require("../helpers/middlewares/checkToken");

userRouter.get('/:id', verifyToken.isLogin, userController.getSingleUser)
userRouter.patch('/changeInfo',verifyToken.isLogin, userController.ChangePersonalInfo)
userRouter.patch('/changePhoto', verifyToken.isLogin, upload, userController.ChangePhotoProfile)

module.exports = userRouter;
