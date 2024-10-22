import {React, useState, handleSubmit} from 'react'
import './Survey.css'
import { surveyQuestions } from '../../data/SurveyQuestions';


const Survey = () => {
    const [responses, setResponses] = useState({});
  
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Survey Responses:', responses);
      alert('Thank you for your feedback!');
    };
  
    return (
      <div className="container">
        <div className="header">
            <div className="header-left">
                <img src="src/assets/logo.4f96106c15bdee332c0c646cf284844d.svg" alt="eHospital Logo" className="logo" />
            </div>
            <div className="header-right">
                <button className="header-button">Home</button>
            </div>
        </div>
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
        </div>
      </div>
    );
  };
  
  export default Survey;