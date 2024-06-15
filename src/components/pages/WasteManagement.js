// src/components/pages/WasteManagement.js
import React from 'react';
import './WasteManagement.css';

function WasteManagement() {
  return (
    <div className='waste-management'>
      <h1>Waste Management</h1>
      <p>Proper waste management is crucial for maintaining a sustainable environment. Here are some tips to help you reduce, reuse, and recycle effectively:</p>
      
      <h2>Recycling Tips</h2>
      <ul>
        <li>Separate recyclable materials such as paper, plastic, and glass.</li>
        <li>Clean and dry recyclables before placing them in the recycling bin.</li>
        <li>Avoid recycling items contaminated with food waste.</li>
      </ul>

      <h2>Composting Tips</h2>
      <ul>
        <li>Compost kitchen scraps like vegetable peels and coffee grounds.</li>
        <li>Avoid composting meat and dairy products to prevent pests.</li>
        <li>Turn the compost pile regularly to aerate and speed up decomposition.</li>
      </ul>

      <h2>Reducing Waste</h2>
      <ul>
        <li>Use reusable bags, bottles, and containers.</li>
        <li>Buy in bulk to reduce packaging waste.</li>
        <li>Choose products with minimal or recyclable packaging.</li>
      </ul>
    </div>
  );
}

export default WasteManagement;
