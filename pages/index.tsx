import Head from 'next/head';
import NavBar from '../components/NavBar';
import ContentNow2 from '../components/ContentNow2';
import { useState } from 'react';
import MobileContent from '../components/MobileContent';

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

      <NavBar
        archive={archive}
        archiveChange={archiveChange}
        bioText={bioText}
        bioTextChange={bioTextChange}
      />
      <div className='desktop-content'>
        <ContentNow2
          bioText={bioText}
          archive={archive}
          slide={slide}
          changeSlide={changeSlide}
        />
      </div>
      <div className='mobile-content'>
        <MobileContent
          bioText={bioText}
          archive={archive}
          slide={slide}
          changeSlide={changeSlide}
        />
      </div>
    </div>
  );
}
