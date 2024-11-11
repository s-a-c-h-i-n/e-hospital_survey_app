import { Routes, Route, Link } from 'react-router-dom';
import SurveyPage from './Components/SurveyPage/SurveyPage';
import LandingPage from './Components/LandingPage/landingPage';
import AdminPage from './Components/Admin/adminPage';
import ThankYouPage from './Components/ThankyouPage/ThankyouPage';

const Navigation = () => {

    return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurveyPage" element={<SurveyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/Thankyou" element={<ThankYouPage />} />
    </Routes>
    </div>
    )

}

export default Navigation;