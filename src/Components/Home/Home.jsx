import React from 'react';

// Imported Assests

import video from '../../assets/ja1_mountain_of.mp4';
import aeroplane from '../../assets/img_plane.png';

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={aeroplane} className="plane" />
      </div>
    </div>
  );
};

export default Home;
