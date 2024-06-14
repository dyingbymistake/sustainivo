// src/components/Report.js
import React from 'react';
import './Report.css';

const Report = ({ report }) => {
  if (!report) {
    return <p>Loading...</p>; // Show loading if the report is not available yet
  }

  const {
    recycleFrequency,
    waterUsage,
    energyConsumption,
    transportationMode,
    meatConsumption,
    wasteSeparation,
    localProducts,
    plasticUsage,
  } = report;

  const recommendations = {
    recycleFrequency: recycleFrequency < 5 ? 'Consider increasing your recycling efforts.' : 'Great job on recycling!',
    waterUsage: waterUsage > 100 ? 'Try to reduce your daily water usage.' : 'Your water usage is within a good range.',
    energyConsumption: energyConsumption > 200 ? 'Consider ways to reduce your energy consumption.' : 'Your energy consumption is efficient.',
    transportationMode: transportationMode !== 'walking' && transportationMode !== 'bike' ? 'Try to use more eco-friendly transportation methods.' : 'Great choice on transportation!',
    meatConsumption: meatConsumption > 3 ? 'Reducing your meat consumption can have a significant positive impact on the environment.' : 'Good job on maintaining a balanced diet!',
    wasteSeparation: wasteSeparation < 7 ? 'Increasing your waste separation can reduce landfill waste.' : 'Excellent waste management!',
    localProducts: localProducts < 5 ? 'Consider buying more locally produced products.' : 'Great job supporting local products!',
    plasticUsage: plasticUsage < 7 ? 'Reducing your single-use plastic usage can greatly benefit the environment.' : 'Excellent work avoiding single-use plastics!'
  };

  return (
    <div className="report-container">
      <h2>Your Environmental Impact Report</h2>
      <p>Here is your personalized report based on your quiz responses:</p>
      <ul>
        <li>Recycling Frequency: {recycleFrequency} - {recommendations.recycleFrequency}</li>
        <li>Daily Water Usage: {waterUsage} liters - {recommendations.waterUsage}</li>
        <li>Monthly Energy Consumption: {energyConsumption} kWh - {recommendations.energyConsumption}</li>
        <li>Primary Transportation Mode: {transportationMode} - {recommendations.transportationMode}</li>
        <li>Meat Consumption: {meatConsumption} days per week - {recommendations.meatConsumption}</li>
        <li>Waste Separation: {wasteSeparation} - {recommendations.wasteSeparation}</li>
        <li>Local Products Purchase: {localProducts} - {recommendations.localProducts}</li>
        <li>Single-use Plastic Usage: {plasticUsage} - {recommendations.plasticUsage}</li>
      </ul>
    </div>
  );
};

export default Report;
