import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Cv from '../components/Cv';
import MobileCv from '../components/MobileCv';

const cv = () => {
  const [bioText, bioTextChange] = useState(true);
  const [archive, archiveChange] = useState(false);
  return (
    <div>
      <NavBar bioText={bioText} bioTextChange={bioTextChange} />
      <div className='desktop-cv'>
        <Cv />
      </div>
      <div className='mobile-cv'>
        <MobileCv bioText={bioText} archive={archive} />
      </div>
    </div>
  );
};

export default cv;
