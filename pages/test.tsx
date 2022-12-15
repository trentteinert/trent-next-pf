import React from 'react';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Test({ data }: { data: any }) {
  return (
    <div>
      <Head>
        <title>test page</title>
      </Head>
      <main>
        <ul>
          {data.map((item: any) => (
            <li key={item}>{item.src}</li>
          ))}
        </ul>
      </main>
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
