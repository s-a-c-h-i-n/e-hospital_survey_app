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
    question: "Would you recommend our service to others?",
    options: ["Yes", "No"],
    type: 'multiple-choice-single',
  },
  {
    id: 4,
    question: "Any suggestions for improvement?",
    options: [],
    type: 'open-ended',
  },
];
