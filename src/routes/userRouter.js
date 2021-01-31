const express = require("express");
const userController = require("../controllers/user");
const userRouter = express.Router();
const upload = require("../helpers/middlewares/multiUpload");
// middleware checktoken
const verifyToken = require("../helpers/middlewares/checkToken");

userRouter.get("/:id", verifyToken.isLogin, userController.getUserData);
userRouter.patch(
  "/:id",
  upload,
  userController.userUpdate
);

module.exports = userRouter;
