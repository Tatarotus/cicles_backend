const express = require("express");
const routes = express.Router();
const LeadController = require("./controllers/LeadController");
const NewsController = require("./controllers/NewsController");
//Main request
routes.get("/", LeadController.index);
//routes.post("/news", NewsController.create);
//routes.get("/news", NewsController.index);
//routes.post("/leads", LeadController.create);

module.exports = routes;
