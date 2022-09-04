var express = require("express");
var Router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "./public/uploads" });

var checkValidate = require("../validation/user.validate");

var userController = require("../controller/UserController");

Router.get("/", userController.index);
Router.get("/create", userController.showFormCreate);

// middleware syntax
Router.post(
  "/create",
  upload.single("avatar"),
  checkValidate.validate,
  userController.createUser
);

Router.get("/:id", userController.getDetailInfo);

module.exports = Router;
// các thư viện gọi database xóa di vì không còn xài chỗ này nữa
