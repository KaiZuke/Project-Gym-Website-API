import React, { useState } from 'react';
import './BMI.css'; 

const useValidation = (error = {}) => {
    const [errors, setErrors] = useState(error);

    const validate = (values) => {
        const newErrors = {};
        if (!values.weight || values.weight <= 0) {
            newErrors.weight = 'Berat badan harus lebih besar dari 0.';
        }
        if (!values.height || values.height <= 0) {
            newErrors.height = 'Tinggi badan harus lebih besar dari 0.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { errors, validate };
};

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');

    const { errors, validate } = useValidation();

    const calculateBMI = () => {
        const isValid = validate({ weight, height });
        if (isValid) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            setBmiCategory(getBMICategory(bmiValue));
        } else {
            setBmi(null);
            setBmiCategory('');
        }
    };

    const getBMICategory = (bmiValue) => {
        if (bmiValue < 18.5) {
            return 'Kekurangan berat badan (Underweight)';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            return 'Normal (Optimal)';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            return 'Kelebihan berat badan (Overweight)';
        } else {
            return 'Obesitas (Obesity)';
        }
    };

    return (
        <div className="container">
            <h1>Kalkulator BMI</h1>
            <div>
                <input
                    type="number"
                    placeholder="Berat Badan (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                {errors.weight && <p className="error">{errors.weight}</p>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Tinggi Badan (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                {errors.height && <p className="error">{errors.height}</p>}
            </div>
            <button onClick={calculateBMI}>Hitung BMI</button>
            {bmi && <p>BMI Anda adalah: {bmi}</p>}
            {bmiCategory && <p>Kategori BMI Anda: {bmiCategory}</p>}
        </div>
    );
};

export default BMICalculator;