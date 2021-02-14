const express = require("express");
const db = require("../models");

//TODO: WTF is a router??
//Create the "router" for the app, and export the "router" at the end of your file.
const router = express.Router();

router.get("/", (req, res) => {
  db.all;
});
