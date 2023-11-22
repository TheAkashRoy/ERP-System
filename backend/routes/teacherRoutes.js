// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacher');

router.post('/insert', async (req, res) => {
  try {
    const { empid, name, dept, ongoingCourses } = req.body;
    const newTeacher = new teacher({
      empid,
      name,
      dept,
      ongoingCourses,
    });
    const savedTeacher = await newTeacher.save();
    res.status(201).json({
      message: "Teacher data saved successfully",
      data: savedTeacher,
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving teacher data" });
  }
});

module.exports = router;