export const surveyQuestions = [
  {
    id: 1,
    question: "How satisfied are you with our service?",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
    type: 'multiple-choice-single',
  },
  {
    id: 2,
    question: "Which of the following aspects of the service did you find satisfactory? (Select all that apply)",
    options: ["Staff", "Facilities", "Waiting Time", "Cost", "Overall Experience"],
    type: 'multiple-choice-multi',
  },
  {
    id: 3,
    question: "Would you continue using our product/service in the future?",
    options: ["Yes, definitely", "Yes, probably", "Not sure", "Probably not", "Definitely not"],
    type: 'multiple-choice-single',
  },
  {
    id: 4,
    question: "Which of the following best describes the areas we should improve? (Select all that apply)",
    options: ["Customer support", "Product features", "Usability/design", "Pricing", "Delivery time", "Communication"],
    type: 'multiple-choice-multi',
  },
  {
    id: 5,
    question: "Would you recommend our service to others?",
    options: ["Yes", "No"],
    type: 'multiple-choice-single',
  },
  {
    id: 6,
    question: "Which department are you providing a rating for?",
    options: ["ER", "Cardio", "Pediatrics", "Nursing"],
    type: 'multiple-choice-single',
  },
  {
    id: 7,
    question: "How would you rate your overall experience?",
    options: [1,2,3,4,5],
    type: 'multiple-choice-single',
  },
  {
    id: 8,
    question: "Any suggestions for improvement?",
    options: [],
    type: 'open-ended',
  },
];
