import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <span className='brand'>Meshki.</span>
        <div className='img-warper'>
          <img
            className="logo"
            src='../src/assets/images/full-moon.png'
            alt="/"
          />
<span className='textspan'>no light mode </span>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
