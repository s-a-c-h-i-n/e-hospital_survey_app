import {React, useState, handleSubmit} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = () => {
    return (
        <div className="landing-container">
            <img src="src/assets/ehospital.png" alt="eHospital" className="image" />
            <br></br>
            <br></br>
            <br></br>
            <h2>Thank you for taking an appointment using our platform!</h2>
            <Link to="/SurveyPage"><button className="header-button">Click here to take a short survey!</button></Link>
        </div>
    )
}

export default LandingPage;