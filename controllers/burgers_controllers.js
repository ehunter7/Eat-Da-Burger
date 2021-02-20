const express = require("express");
const db = require("../models/burger");

//Create the "router" for the app, and export the "router" at the end of your file.
const router = express.Router();

router.get("/", (req, res) => {
  db.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.table(data);
    console.log(`burgers_controller line 12: ${hbsObject}`);
    console.table(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post(`/api/burger`, (req, res) => {
  db.insertOne([`burger_name`], req.body.name, (result) => {
    res.json({ id: result.insertID });
  });
});

router.put(`/api/burger/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log(`condition`, condition);
  db.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(400).end();
    }
    res.status(200).end();
  });
});

router.delete(`/api/burger/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;

  db.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
