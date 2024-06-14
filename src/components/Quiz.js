import React, { useState } from 'react';
import axios from 'axios';
import './Quiz.css';

const Quiz = ({ setReport }) => {
  const [answers, setAnswers] = useState({
    recycleFrequency: '',
    waterUsage: '',
    energyConsumption: '',
    transportationMode: '',
    meatConsumption: '',
    wasteSeparation: '',
    localProducts: '',
    plasticUsage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/quiz', answers);
      setReport(response.data); // Set report state in parent component to display report
    } catch (error) {
      console.error('Error submitting the quiz!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>Environmental Impact Quiz</h2>
      <p>Answer the following questions to understand your current environmental impact:</p>
      <label>
        How often do you recycle? (1-10, where 1 is very often and 10 is never):
        <input
          type="number"
          name="recycleFrequency"
          min="1"
          max="10"
          value={answers.recycleFrequency}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        How much water do you use daily? (liters):
        <input
          type="number"
          name="waterUsage"
          value={answers.waterUsage}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        How much energy do you consume monthly? (kWh):
        <input
          type="number"
          name="energyConsumption"
          value={answers.energyConsumption}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        What is your primary mode of transportation?
        <select
          name="transportationMode"
          value={answers.transportationMode}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="car">Car</option>
          <option value="publicTransport">Public Transport</option>
          <option value="bike">Bike</option>
          <option value="walking">Walking</option>
          <option value="electricCar">Electric Car</option>
        </select>
      </label>
      <br />
      <label>
        How often do you consume meat? (days per week):
        <input
          type="number"
          name="meatConsumption"
          min="0"
          max="7"
          value={answers.meatConsumption}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Do you separate your waste (e.g., plastics, organic, paper)? (1-10):
        <input
          type="number"
          name="wasteSeparation"
          min="1"
          max="10"
          value={answers.wasteSeparation}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        How often do you buy locally produced products? (1-10):
        <input
          type="number"
          name="localProducts"
          min="1"
          max="10"
          value={answers.localProducts}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        How frequently do you use single-use plastics? (1-10):
        <input
          type="number"
          name="plasticUsage"
          min="1"
          max="10"
          value={answers.plasticUsage}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Quiz;
