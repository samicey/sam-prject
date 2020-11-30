const express = require("express");
const controller = require("../controller/controller");

const routes = express.Router();

routes.get("/", controller.welcome)
routes.get("/users", controller.getAllUsers)
routes.get("/users/:id", controller.getOneUsers)


module.exports = routes;