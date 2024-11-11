import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import './ThankYouPage.css';
import { Routes, Route, Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">

        <div>
        <img src="src/assets/ehospital.png" alt="eHospital" className="image" />
        </div>

      {/* Main Content */}
      <div className="content">
        <h2>Thank you for taking the time to provide your feedback!</h2>

        {/* Action Buttons */}
        <div className="buttons-container">
        <Link to="/"><button className="action-button">Return to Homepage</button></Link>
          <button className="action-button">Book New Appointment</button>
          <button className="action-button">Download Survey Summary</button>
        </div>

        {/* Social Media Links */}
        <p className="social-text">Share your experience on social media -</p>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaGlobe className="social-icon" />
        </div>

        {/* Contact Information */}
        <p className="contact-text">
          If you have any further questions or need assistance, please contact us at <a href="mailto:support@ehospital.com">support@ehospital.com</a> or call +123-456-7890
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
