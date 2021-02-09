import React from 'react';
import logo from '../../assets/logo.png';
import './style.scss';

const Header = props => {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <img src={logo} alt='Website logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
