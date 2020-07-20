const express = require("express");
const routes = express.Router();
const angelController = require("./controllers/AngelController");

//Main request
routes.get("/", (req, res) => {
  res.json({
    message: "Welcome to divine time API! Some routes: /planets - to check planets position, /time - to check current astrological time in the south hemisphere!"
  });
});
routes.get("/planets", angelController.planets);
routes.get("/time", angelController.time);

module.exports = routes;
