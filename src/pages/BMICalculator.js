import React, { useState } from 'react';

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

    const { errors, validate } = useValidation();

    const calculateBMI = () => {
        const isValid = validate({ weight, height });
        if (isValid) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
        } else {
            setBmi(null);
        }
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <div>
                <input
                    type="number"
                    placeholder="Berat Badan (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                {errors.weight && <p style={{ color: 'red' }}>{errors.weight}</p>}
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Tinggi Badan (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                {errors.height && <p style={{ color: 'red' }}>{errors.height}</p>}
            </div>
            <button onClick={calculateBMI}>Hitung BMI</button>
            {bmi && <p> BMI Anda adalah: {bmi}</p>}
        </div>
    );
};

export default BMICalculator;
