import React from 'react';
import ShopIndoor from '../../assets/indoor.jpg';
import ShopOutdoor from '../../assets/outdoor.jpg';
import './style.scss';

const Directory = props => {
  return (
    <div className='directory'>
      <div className='wrap'>
        <div style={{ backgroundImage: `url(${ShopIndoor})` }} className='item'>
          <a>Shop Indoor wears</a>
        </div>
        <div style={{ backgroundImage: `url(${ShopOutdoor})` }}>
          <a>Shop Outdoor wears</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
