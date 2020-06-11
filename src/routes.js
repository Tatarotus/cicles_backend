const express = require("express");
const routes = express.Router();
const angelController = require("./controllers/AngelController");

//Main request
routes.get("/planets", angelController.planets);
routes.get("/time", angelController.time);

module.exports = routes;
