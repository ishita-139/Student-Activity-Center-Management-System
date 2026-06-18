const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

router.post("/", async (req, res) => {
  const student = await Student.create(req.body);

  res.json(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find();

  res.json(students);
});

module.exports = router;