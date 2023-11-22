const express = require('express');
const router = express.Router();
const QuestionBank = require('../models/questionBank');

router.post('/insertQS', async (req, res) => {
  try {
    const { subject, setName, questions} = req.body;
    const newSet = new questionBank({
        subject,
        setName,
        questions
    });
    const saved = await newSet.save();
    res.status(201).json({
      message: "Question data saved successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving Question data" });
  }
});

router.get('/questions/:subject', async (req, res) => {
  const subject = req.params.subject;

  try {
    const questionSetNames = await questionBank.distinct('setName', { subject });

    res.json({ subject, questionSetNames });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
