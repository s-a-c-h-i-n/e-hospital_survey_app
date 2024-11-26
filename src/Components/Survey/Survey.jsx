import {React, useState, handleSubmit} from 'react'
import './Survey.css'
import '../Navbar/navBar.css'
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { surveyQuestions } from '../../data/SurveyQuestions';


const Survey = () => {
  const [responses, setResponses] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (questionId, answer, isMulti = false) => {
    if (isMulti) {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [questionId]: prevResponses[questionId]
          ? prevResponses[questionId].includes(answer)
            ? prevResponses[questionId].filter((ans) => ans !== answer)
            : [...prevResponses[questionId], answer]
          : [answer],
      }));
    } else {
      setResponses((prevResponses) => ({
        ...prevResponses,
        [questionId]: answer,
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Build multipleChoiceAnswers array dynamically
  const multipleChoiceAnswers = surveyQuestions
    .filter((question) => question.type === 'multiple-choice-single' || question.type === 'multiple-choice-multi')
    .map((question) => ({
      question: question.question,
      answer: Array.isArray(responses[question.id]) ? responses[question.id].join(', ') : responses[question.id] || '',
    }))
    .filter((item) => item.answer !== ''); // Remove unanswered questions

  const payload = {
    multipleChoiceAnswers,
    createdAt: new Date(),
  };

  try {
    const response = await axios.post(`http://localhost:5000/api/surveys/submit`, payload);
    console.log('Survey submitted successfully:', response.data);
    navigate('/Thankyou');
  } catch (error) {
    console.error('Error submitting survey:', error.response?.data || error.message);
    alert('Failed to submit the survey. Please try again.');
  }
};

  return (
    <div className="container">
      <div className="survey-container">
        <h2>Survey</h2>
        <form onSubmit={handleSubmit}>
          {surveyQuestions.map((question) => (
            <div key={question.id} className="survey-question">
              <h3>{question.question}</h3>
              <div className="options-container">
                {question.type === 'multiple-choice-single' ? (
                  question.options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={`${question.id}-${index}`}
                        name={`question-${question.id}`}
                        value={option}
                        checked={responses[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                      />
                      <label htmlFor={`${question.id}-${index}`}>{option}</label>
                    </div>
                  ))
                ) : question.type === 'multiple-choice-multi' ? (
                  question.options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`${question.id}-${index}`}
                        name={`question-${question.id}`}
                        value={option}
                        checked={responses[question.id]?.includes(option) || false}
                        onChange={() => handleOptionChange(question.id, option, true)}
                      />
                      <label htmlFor={`${question.id}-${index}`}>{option}</label>
                    </div>
                  ))
                ) : (
                  <textarea
                    rows="4"
                    placeholder="Your answer here..."
                    value={responses[question.id] || ''}
                    onChange={(e) => handleOptionChange(question.id, e.target.value)}
                  />
                )}
              </div>
            </div>
          ))}
          <button className="button" type="submit">Submit Survey</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Survey;