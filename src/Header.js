import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/workouts">Workouts</Link></li>
                    <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
                    <li><Link to="/foods">Foods</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header