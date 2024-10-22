import { Routes, Route, Link } from 'react-router-dom';
import SurveyPage from './Components/Survey/SurveyPage';
import LandingPage from './Components/Survey/landingPage';
import AdminPage from './Components/Survey/adminPage';

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