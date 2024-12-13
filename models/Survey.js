const mongoose = require('mongoose');

// Define the schema
const SurveySchema = new mongoose.Schema({
  multipleChoiceAnswers: [
    {
      question: String,
      answer: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model('Survey', SurveySchema);
