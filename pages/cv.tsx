import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Cv from '../components/Cv';
import MobileCv from '../components/MobileCv';

const cv = () => {
  const [bioText, bioTextChange] = useState(true);

  return (
    <div>
      <NavBar bioText={bioText} bioTextChange={bioTextChange} />
      <div className='desktop-cv'>
        <Cv />
      </div>
      <div className='mobile-cv'>
        <MobileCv bioText={bioText} />
      </div>
    </div>
  );
};

export default cv;
