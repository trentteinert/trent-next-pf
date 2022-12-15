import Head from 'next/head';
import NavBar from '../components/NavBar';
import ContentNow2 from '../components/ContentNow2';
import { useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ data }: { data: any }) {
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

      <ContentNow2
        imageList={data}
        bioText={bioText}
        archive={archive}
        slide={slide}
        changeSlide={changeSlide}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const images = await prisma.images.findMany();

  return {
    props: {
      data: images,
    },
  };
}
