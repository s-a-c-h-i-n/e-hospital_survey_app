import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage/landingPage';
import SurveyPage from './Components/SurveyPage/SurveyPage';
import AdminDashboard from './Components/adminDashboard/adminDashboard';
import ThankYouPage from './Components/ThankyouPage/ThankyouPage';

const Navigation = () => {

    return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurveyPage" element={<SurveyPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/Thankyou" element={<ThankYouPage />} />
    </Routes>
    </div>
    )

}

export default Navigation;