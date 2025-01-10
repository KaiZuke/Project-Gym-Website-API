import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
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
                                <p>Portal ini memiliki berbagai fungsi dan informasi yang bisa Anda gunakan
                                    untuk memulai hidup yang lebih sehat.
                                </p>
                                <p>Berikut adalah fitur-fitur unggulan dari portal kami:</p>
                                <h4>List Workout</h4>
                                <p>Temukan beragam workout yang sesuai dengan kebutuhan dan tingkat kebugaran Anda. 
                                    Mulai dari pemula hingga profesional, 
                                    semua tersedia untuk mendukung gaya hidup aktif Anda.</p>
                                <h4>BMI Calculator</h4>
                                <p>Cek Body Mass Index (BMI) Anda dengan mudah dan dapatkan panduan untuk mengetahui
                                    berat badan ideal untuk Anda.</p>
                                <h4>List Makanan Sehat</h4>
                                <p>Jelajahi rekomendasi makanan sehat yang lezat dan bergisi untuk mendukung kebutuhan tubuh Anda
                                    setiap harinya.</p>    
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