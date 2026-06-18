const express = require("express");

const router = express.Router();

const Event = require("../models/Event");
const Student = require("../models/Student");

const sendMail = require("../utils/sendMail");

router.post("/register", async (req, res) => {
  try {
    const { name, email, rollNo, eventId } = req.body;

    let student = await Student.findOne({ email });

    if (!student) {
      student = await Student.create({
        name,
        email,
        rollNo
      });
    }

    const event = await Event.findById(eventId);

    await sendMail(email, event.title);

    res.json({
      success: true,
      message: "Registered Successfully"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;