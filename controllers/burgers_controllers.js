const express = require("express");
const db = require("../models");

//Create the "router" for the app, and export the "router" at the end of your file.
const router = express.Router();

router.get("/", (req, res) => {
  db.burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post(`/api/burger`, (req, res) => {
  db.burger.insertOne(burger_name, req.body.gurger_name, (result) => {
    res.json({ id: result.insertID });
  });
});

router.put(`/api/burger/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log(`condition`, condition);
  db.burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(400).end();
    }
    res.status(200).end();
  });
});

router.delete(`/api/burger/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;

  db.burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
