import Head from 'next/head';
import NavBar from '../components/NavBar';
import ContentNow2 from '../components/ContentNow2';
import { useState } from 'react';
import MobileContent from '../components/MobileContent';
import ScrollButton from '../components/ScrollButton';

export default function Home() {
  const [bioText, bioTextChange] = useState(false);
  const [slide, changeSlide] = useState(() => 0);

  return (
    <div>
      <Head>
        <title>trenton teinert</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar bioText={bioText} bioTextChange={bioTextChange} />
      <div className='desktop-content'>
        <ContentNow2 slide={slide} changeSlide={changeSlide} />
      </div>
      <div className='mobile-content'>
        <ScrollButton />
        <MobileContent bioText={bioText} />
      </div>
    </div>
  );
}
