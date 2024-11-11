import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage/landingPage';
import SurveyPage from './Components/SurveyPage/SurveyPage';
import AdminPage from './Components/Admin/adminPage'
import AdminDashboard from './Components/adminDashboard/adminDashboard';

const Navigation = () => {

    return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SurveyPage" element={<SurveyPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </div>
    )

}

export default Navigation;