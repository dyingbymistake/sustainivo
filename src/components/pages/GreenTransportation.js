// src/components/pages/GreenTransportation.js
import React from 'react';
import './GreenTransportation.css';

function GreenTransportation() {
  return (
    <div className='green-transportation'>
      <h1>Green Transportation</h1>
      <p>Using sustainable transportation methods can reduce your carbon footprint and contribute to a healthier planet. Here are some benefits and options for green transportation:</p>
      
      <h2>Public Transport</h2>
      <ul>
        <li>Using buses and trains can significantly reduce individual carbon emissions.</li>
        <li>Public transport is often more cost-effective than driving.</li>
      </ul>

      <h2>Carpooling</h2>
      <ul>
        <li>Sharing rides with others reduces the number of vehicles on the road, lowering emissions.</li>
        <li>Carpooling can save money on fuel and maintenance costs.</li>
      </ul>

      <h2>Biking</h2>
      <ul>
        <li>Biking is a zero-emission mode of transport that also provides health benefits.</li>
        <li>Many cities now have bike-sharing programs for easy access to bikes.</li>
      </ul>

      <h2>Electric Vehicles</h2>
      <ul>
        <li>Electric vehicles produce no tailpipe emissions and have lower overall emissions than gasoline vehicles.</li>
        <li>Many governments offer incentives for purchasing electric vehicles.</li>
      </ul>
    </div>
  );
}

export default GreenTransportation;
