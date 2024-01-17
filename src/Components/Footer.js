// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <video className="footer-video" controls>
          <source src="images/intro vid.mp4" type="video/mp4" />
        </video>

        <div className="footer-group">
          <div className="footer-mail-group">
            <img className="footer-image" src="images/mail.png" alt="" />
            <div className="footer-text-wrapper" style={{ color: 'white' }}>
              CARES@XCIBIKES.COM
            </div>
          </div>
        </div>

        <div className="social-media">
          <div className="social-text" style={{ color: 'white' }}>GET SOCIAL</div>
          <img className="social-icon" src="images/facebook.png" alt="Facebook" />
          <img className="social-icon-2" src="images/instagram.png" alt="Instagram" />
          <img className="social-icon-3" src="images/xtwitter.png" alt="Twitter" />
        </div>

        <div className="footer-group-3">
          <div className="footer-text-wrapper-3" style={{ color: 'white' }}>Newest Arrivals</div>
          <div className="footer-text-wrapper-4" style={{ color: 'white' }}>Bestsellers</div>
          <div className="footer-text-wrapper-5" style={{ color: 'white' }}>Why choose xci</div>
          <img className="footer-image-2" src="images/register.png" alt="" />
          <img className="footer-image-4" src="images/dr logo.png" alt="" />
          <img className="footer-image-5" src="images/warranty.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
