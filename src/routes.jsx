import { Routes, Route, Link } from 'react-router-dom';
import SurveyPage from './Components/SurveyPage/SurveyPage';
import LandingPage from './Components/LandingPage/landingPage';
import AdminPage from './Components/Admin/adminPage';

const Navigation = () => {

    return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurveyPage" element={<SurveyPage />} />
        <Route path="/admin" element={<AdminPage />} />
    </Routes>
    </div>
    )

}

export default Navigation;