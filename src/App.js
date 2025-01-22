import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './pages/About';
import Workouts from './pages/Workouts';
import BMICalculator from './pages/BMICalculator';
import Foods from './pages/Foods';
import Footer from './Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/workouts" element={<Workouts />} />
                        <Route path="/bmi-calculator" element={<BMICalculator />} />
                        <Route path="/foods" element={<Foods />} />
                        <Route path="/" element={
                            <div>
                                <h1>Selamat Datang di GymBro!</h1>
                                <h3>Portal Kesehatan Untuk Hidup yang Lebih Baik</h3>
                                <p>Selamat datang di GymBro, tempat di mana kesehatan dan kebugaran menjadi prioritas utama Anda! 
                                   Kami menyediakan berbagai alat dan informasi untuk membantu Anda memulai perjalanan menuju gaya hidup yang lebih sehat.</p>
                                <iframe 
                                    width="800" 
                                    height="520" 
                                    src="https://www.youtube.com/embed/RNkpzDaqOpM" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;