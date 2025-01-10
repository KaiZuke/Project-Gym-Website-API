import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './loading.css'; 

const Workouts = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExercises = async (muscle = '', type = '', difficulty = '') => {
    setLoading(true);
    try {
      const queryParams = [];
      if (muscle) queryParams.push(`muscle=${muscle}`);
      if (type) queryParams.push(`type=${type}`);
      if (difficulty) queryParams.push(`difficulty=${difficulty}`);
      
      const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
      const response = await axios.get(`https://api.api-ninjas.com/v1/exercises${queryString}`, {
        headers: { 'X-Api-Key': 'AeO2uROQvVywgbPW7AIlFg==37r2WebydJ8kGxb7' }, 
      });
      
      setExercises(response.data);
      setFilteredExercises(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  useEffect(() => {
    fetchExercises(selectedMuscle, selectedType, selectedDifficulty);
  }, [selectedType, selectedMuscle, selectedDifficulty]);

  if (loading) return <div className="loading"></div>; 
  if (error) return <p>Error searching exercises: {error.message}</p>;
  
  const exerciseTypes = [...new Set(exercises.map(ex => ex.type))];
  const muscleGroups = [...new Set(exercises.map(ex => ex.muscle))];
  const difficultyLevels = [...new Set(exercises.map(ex => ex.difficulty))];

  return (
    <div>
      <h1>Search Exercises</h1>
      
      <label>Type:</label>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All</option>
        {exerciseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <label>Muscle:</label>
      <select value={selectedMuscle} onChange={(e) => setSelectedMuscle(e.target.value)}>
        <option value="">All</option>
        {muscleGroups.map((muscle, index) => (
          <option key={index} value={muscle}>{muscle}</option>
        ))}
      </select>

      <label>Difficulty:</label>
      <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
        <option value="">All</option>
        {difficultyLevels.map((difficulty, index) => (
          <option key={index} value={difficulty}>{difficulty}</option>
        ))}
      </select>

      <h2>Filtered Exercises</h2>
      <ul>
        {filteredExercises.map((exercise, index) => (
          <li key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px ', borderRadius: '5px' }}>
            <h3>{exercise.name}</h3>
            <p><strong>Type:</strong> {exercise.type}</p>
            <p><strong>Muscle:</strong> {exercise.muscle}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
            <p><strong>Instructions:</strong> {exercise.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;