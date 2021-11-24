import React from 'react';
import './NFTCard.css';
import equil from '../images/image-equilibrium.jpg';


const NFTCard = () => (
    <div className='main-card'>
      <div className='image-container'>
        <img src={equil} className='main-image'/>
      </div>
      <div className='mid-container'>
        <div className='description'>
          <h4>Equilibrium # 3429</h4>
          <p>Our Equilibirum collection promotes balance and calm</p>
        </div>
        <div className='price-time'>
          <p id='price'>0.041 ETH</p>
          <p id='time'>3 days left</p>
        </div>
      </div>
      <hr/>
      <div className='bottom-container'>
        <p>Creation of Jason Kobuchi</p>
      </div>
    </div>
);

export default NFTCard;