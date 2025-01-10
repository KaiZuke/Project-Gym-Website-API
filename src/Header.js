import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logogymbro.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/workouts">Workouts</Link></li>
                    <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
