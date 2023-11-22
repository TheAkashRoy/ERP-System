const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

router.get('/setQuiz/:subject/:setName', async (req, res) => {
  const { subject, setName } = req.params;
  const uuid = Math.floor(1000 + Math.random() * 9000);
  const newQuiz = new Quiz({
    subject,
    setName,
    code: uuid
  });

  newQuiz.save();
  res.json({uuid});
});

router.get('/getQS/:code', async (req, res) => {
  const providedCode = req.params.code;

  try {
    const quizData = await Quiz.findOne({ code: providedCode });

    if (!quizData) {
      return res.status(404).json({ message: 'Quiz not found for the provided code' });
    }

    const { subject, setName } = quizData;

    const questionsData = await questionBank.findOne({ subject, setName });

    if (!questionsData) {
      return res.status(404).json({ message: 'Questions not found for the provided subject and setName' });
    }

    res.json({ subject, setName, questions: questionsData.questions });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
