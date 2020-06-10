const express = require("express");
const routes = express.Router();
const angelController = require("./controllers/AngelController");

//Main request
routes.get("/", angelController.index);

module.exports = routes;
