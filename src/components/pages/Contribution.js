// frontend/src/components/pages/Contribution.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contribution.css';

const Contribution = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contributions', formData);
      console.log('Contribution submitted:', response.data);
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error('Error submitting contribution:', error);
    }
  };

  return (
    <div className="contribution-form-container">
      <h1>Contribute to Our Community</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contribution;
