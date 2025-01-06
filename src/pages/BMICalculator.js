import React, { useState } from 'react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <input 
                type="number" 
                placeholder="Weight (kg)" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Height (cm)" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
            />
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && <p>Your BMI is: {bmi}</p>}
        </div>
    );
};

export default BMICalculator;