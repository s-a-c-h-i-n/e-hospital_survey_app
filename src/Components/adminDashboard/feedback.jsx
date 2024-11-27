import React from 'react';


const Feedback = ({surveyData}) => {

    return (
        <div className="feedback">
            {console.log}
            {surveyData.map((question) => {
                return (<div>
                <h3>{"Question: " + question.question}</h3>
                <p>{"Answer: " + question.answer}</p>
                </div>)
            })}
        </div>
    )

}

export default Feedback;