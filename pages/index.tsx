import Head from 'next/head';
import NavBar from '../components/NavBar';
import ContentNow2 from '../components/ContentNow2';
import { useState, useRef } from 'react';
import MobileContent from '../components/MobileContent';
import ScrollButton from '../components/ScrollButton';

export default function Home() {
  const [bioText, bioTextChange] = useState(false);
  const [archive, archiveChange] = useState(false);
  const [slide, changeSlide] = useState(() => 0);

  return (
    <div>
      <Head>
        <title>trent</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar bioTextChange={bioTextChange} bioText={bioText} />
      <div className='desktop-content'>
        <ContentNow2
          bioText={bioText}
          archive={archive}
          slide={slide}
          changeSlide={changeSlide}
        />
      </div>
      <div className='mobile-content'>
        <ScrollButton />
        <MobileContent bioText={bioText} />
      </div>
    </div>
  );
}
