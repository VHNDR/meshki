import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <span className='brand'>Meshki.</span>
        <img
          className="logo"
          src='../src/assets/images/full-moon.png'
          alt="/"
        />
      </div>
    </div>
  );
}

export default Navbar;
