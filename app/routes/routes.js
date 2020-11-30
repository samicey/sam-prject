const express = require("express");
const controller = require("../controller/controller");

const routes = express.Router();

routes.get("/", controller.welcome)
routes.get("/users", controller.getAllUsers)
routes.get("/user/:id", controller.getOneUsers)
routes.get("/users/:name", controller.filterUsers)


module.exports = routes;