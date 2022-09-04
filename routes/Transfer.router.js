const express = require("express");
const transferController = require("../controller/TransferController");
const Router = express.Router();

Router.get("/", transferController.showFormCreate);
Router.post("/", transferController.create);

module.exports = Router;
