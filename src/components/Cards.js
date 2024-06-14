import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Ways to Live More Sustainably!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/energy-saving.jpg'
              text='Discover tips and tricks to reduce your energy consumption and save money on your bills.'
              label='Home Energy Use'
              path='/home-energy-use'
            />
            <CardItem
              src='/images/waste-management.jpg'
              text='Learn how to effectively manage your waste through recycling, composting, and more.'
              label='Waste Management'
              path='/waste-management'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sustainable-eating.jpg'
              text='Find out how you can make more sustainable food choices and reduce your environmental impact.'
              label='Sustainable Eating'
              path='/sustainable-eating'
            />
            <CardItem
              src='/images/green-transport.jpg'
              text='Explore the benefits of using green transportation options like biking, carpooling, and electric vehicles.'
              label='Green Transportation'
              path='/green-transportation'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
