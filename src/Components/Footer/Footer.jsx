import React from 'react';

//Imported Images
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="grindOne">
          <div className="logoDiv">
            <img src={Logo} className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
