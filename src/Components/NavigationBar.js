import React from 'react';
import './navigationbar.css';

const NavigationBar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#newest-arrivals">
        <img className="logo img-fluid" src="images/xci logo.png" alt="XCi Logo" />
      </a>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#newest-arrivals">Newest Arrivals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#bestsellers">Bestsellers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#choose-xci">Why choose XCi</a>
          </li>
          <li className="nav-item">
            <img className="icon-image-0" src="images/video.png" alt="Icon 0" />
          </li>
          <li className="nav-item">
            <img className="icon-image-1" src="images/register.png" alt="Icon 1" />
          </li>
          <li className="nav-item">
            <img className="icon-image-2" src="images/dr logo.png" alt="Icon 2" />
          </li>
          <li className="nav-item">
            <img className="icon-image-3" src="images/amazon-circle.png" alt="Icon 3" />
          </li>
        </ul>
      </div>
      {/* This button can also toggle the menu */}
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        {/* Optional content for this button */}
      </button>
    </nav>
  );
}

export default NavigationBar;
