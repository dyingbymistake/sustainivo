// src/components/pages/HomeEnergy.js
import React from 'react';
import ''/workspaces/sustainivo/src/components/pages/HomeEnergyUse.css'; // Import the corresponding CSS file

function HomeEnergy() {
  return (
    <div className='home-energy'>
      <h1>Home Energy Use</h1>
      <p>Reducing your home energy consumption not only saves money but also reduces your environmental footprint. Here are some tips to help you save energy:</p>
      
      <h2>Energy-Saving Tips</h2>
      <ul>
        <li>Use LED light bulbs instead of incandescent bulbs.</li>
        <li>Install a programmable thermostat to control heating and cooling efficiently.</li>
        <li>Seal windows and doors to prevent heat loss in winter and keep cool air in during summer.</li>
        <li>Unplug electronic devices when not in use to avoid phantom energy drain.</li>
        <li>Consider investing in energy-efficient appliances.</li>
      </ul>

      <h2>Energy-Efficient Products</h2>
      <ul>
        <li><a href="https://www.energystar.gov/products">Energy Star Appliances</a></li>
        <li><a href="https://www.ledlighting.com/">LED Lighting Solutions</a></li>
        <li><a href="https://www.smartthermostatguide.com/">Smart Thermostats</a></li>
      </ul>
    </div>
  );
}

export default HomeEnergy;
