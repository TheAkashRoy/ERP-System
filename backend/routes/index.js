const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const teacherRoutes = require('./teacherRoutes');
const questionBankRoutes = require('./questionBankRoutes');
const quizRoutes = require('./quizRoutes');

router.use('/auth', authRoutes);
router.use('/teachers', teacherRoutes);
router.use('/questionBank', questionBankRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;