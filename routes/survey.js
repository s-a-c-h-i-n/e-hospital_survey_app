const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

// Route to save survey responses
router.post('/submit', async (req, res) => {
  try {
    const { name, email, rating, feedback, multipleChoiceAnswers } = req.body;

    // Create a new survey response
    const newSurvey = new Survey({
      name,
      email,
      rating,
      feedback,
      multipleChoiceAnswers,
    });

    // Save to the database
    await newSurvey.save();
    res.status(201).json({ message: 'Survey submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch all survey responses (optional)
router.get('/responses', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
