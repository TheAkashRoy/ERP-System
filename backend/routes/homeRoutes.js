const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

router.get('/', async (req, res) => {
  res.json(
    {"message": "Welcome to the home page"}
  );
});


module.exports = router;
