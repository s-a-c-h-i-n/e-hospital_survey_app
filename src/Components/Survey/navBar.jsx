import {React} from 'react'
import { Link } from 'react-router-dom';
import './Survey.css'

const NavBar = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="src/assets/logo.4f96106c15bdee332c0c646cf284844d.svg" alt="eHospital Logo" className="logo" />
            </div>
            <div className="header-right">
                <Link to="/"><button className="header-button">Home</button></Link>
                <Link to="/admin"><button className="header-button">Admin</button></Link>
            </div>
            
        </div>
    )
}

export default NavBar;