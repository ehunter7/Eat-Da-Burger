const express = require("express");
const db = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  db.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post(`/api/burgers`, (req, res) => {
  db.insertOne("burger_name", req.body.name, (result) => {
    res.json({ id: result.insertID });
  });
});

router.put(`/api/burgers/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;

  db.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(400).end();
    }
    res.status(200).end();
  });
});

router.delete(`/api/burgers/:id`, (req, res) => {
  const condition = `id = ${req.params.id}`;

  db.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
