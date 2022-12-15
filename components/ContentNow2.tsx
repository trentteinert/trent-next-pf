import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ContentNow2 = ({
  bioText,
  archive,
  slide,
  changeSlide,
}: {
  bioText: boolean;
  archive: boolean;
  slide: number;
  changeSlide: Function;
}) => {
  const imageList = [
    {
      src: 'img-1.jpg',
      title: '#1',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-2.jpg',
      title: '#2',
      location: 'Brookyln, Nyc',
    },
    {
      src: 'img-3.jpg',
      title: '#3',
      location: 'Queens, Nyc',
    },
    {
      src: 'img-4.jpg',
      title: '#4',
      location: 'Queens, Nyc',
    },
    {
      src: 'img-5.jpg',
      title: '#5',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-6.jpg',
      title: '#6',
      location: 'Coney Island, Nyc',
    },
    {
      src: 'img-7.jpg',
      title: '#7',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-8.jpg',
      title: '#8',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-9.jpg',
      title: '#9',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-10.jpg',
      title: '#10',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-11.jpg',
      title: '#11',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-12.jpg',
      title: '#12',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-13.jpg',
      title: '#13',
      location: 'Queens, Nyc',
    },
    {
      src: 'img-14.jpg',
      title: '#14',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-15.jpg',
      title: '#15',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-16.jpg',
      title: '#16',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-17.jpg',
      title: '#17',
      location: 'Coney Island, Nyc',
    },
    {
      src: 'img-18.jpg',
      title: '#18',
      location: 'Coney Island, Nyc',
    },
    {
      src: 'img-19.jpg',
      title: '#19',
      location: 'Coney Island, Nyc',
    },
    {
      src: 'img-20.jpg',
      title: '#20',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-21.jpg',
      title: '#21',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-22.jpg',
      title: '#22',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-23.jpg',
      title: '#23',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-24.jpg',
      title: '#24',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-25.jpg',
      title: '#25',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-26.jpg',
      title: '#26',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-27.jpg',
      title: '#27',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-28.jpg',
      title: '#28',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-29.jpg',
      title: '#29',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-30.jpg',
      title: '#30',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-31.jpg',
      title: '#31',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-32.jpg',
      title: '#32',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-33.jpg',
      title: '#33',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-34.jpg',
      title: '#34',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-35.jpg',
      title: '#35',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-36.jpg',
      title: '#36',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-37.jpg',
      title: '#37',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-38.jpg',
      title: '#38',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-39.jpg',
      title: '#39',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-40.jpg',
      title: '#40',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-41.jpg',
      title: '#41',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-42.jpg',
      title: '#42',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-43.jpg',
      title: '#43',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-44.jpg',
      title: '#44',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-45.jpg',
      title: '#45',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-46.jpg',
      title: '#46',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-47.jpg',
      title: '#47',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-48.jpg',
      title: '#48',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-49.jpg',
      title: '#49',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-50.jpg',
      title: '#50',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-51.jpg',
      title: '#51',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-52.jpg',
      title: '#52',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-53.jpg',
      title: '#53',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-54.jpg',
      title: '#54',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-55.jpg',
      title: '#55',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-56.jpg',
      title: '#56',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-57.jpg',
      title: '#57',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-58.jpg',
      title: '#58',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-59.jpg',
      title: '#59',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-60.jpg',
      title: '#60',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-61.jpg',
      title: '#61',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-62.jpg',
      title: '#62',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-63.jpg',
      title: '#63',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-64.jpg',
      title: '#64',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-65.jpg',
      title: '#65',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-66.jpg',
      title: '#66',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-67.jpg',
      title: '#67',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-68.jpg',
      title: '#68',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-69.jpg',
      title: '#69',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-70.jpg',
      title: '#70',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-71.jpg',
      title: '#71',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-72.jpg',
      title: '#72',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-73.jpg',
      title: '#73',
      location: 'Amtrak to Washington',
    },
    {
      src: 'img-74.jpg',
      title: '#74',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-75.jpg',
      title: '#75',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-76.jpg',
      title: '#76',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-77.jpg',
      title: '#77',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-78.jpg',
      title: '#78',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-79.jpg',
      title: '#79',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-80.jpg',
      title: '#80',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-81.jpg',
      title: '#81',
      location: 'Nashville, Tenessee',
    },
    {
      src: 'img-82.jpg',
      title: '#82',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-83.jpg',
      title: '#83',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-84.jpg',
      title: '#84',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-85.jpg',
      title: '#85',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-86.jpg',
      title: '#86',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-87.jpg',
      title: '#87',
      location: 'Nashville, Tenessee',
    },
    {
      src: 'img-88.jpg',
      title: '#88',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-89.jpg',
      title: '#89',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-90.jpg',
      title: '#90',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-91.jpg',
      title: '#91',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-92.jpg',
      title: '#92',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-93.jpg',
      title: '#93',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-94.jpg',
      title: '#94',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-95.jpg',
      title: '#95',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-96.jpg',
      title: '#96',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-97.jpg',
      title: '#97',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-98.jpg',
      title: '#98',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-99.jpg',
      title: '#99',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-100.jpg',
      title: '#100',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-101.jpg',
      title: '#101',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-102.jpg',
      title: '#102',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-103.jpg',
      title: '#103',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-104.jpg',
      title: '#104',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-105.jpg',
      title: '#105',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-106.jpg',
      title: '#106',
      location: 'Manhattan, Nyc',
    },
    {
      src: 'img-107.jpg',
      title: '#107',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-108.jpg',
      title: '#108',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-109.jpg',
      title: '#109',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-110.jpg',
      title: '#110',
      location: 'Brooklyn, Nyc',
    },
    {
      src: 'img-111.jpg',
      title: '#111',
      location: 'Manhattan, Nyc',
    },
  ];

  let d = new Date();
  let n = d.getDate();

  useEffect(() => {
    function incrementNum() {
      changeSlide(n);
    }
    incrementNum();
  }, []);

  const randomNum = (min: any, max: any, lastSlide: any) => {
    let num = Math.floor(Math.random() * (max - min) + min);
    if ((num = lastSlide)) {
      let num = Math.floor(Math.random() * (max - min) + min);
      return num;
    } else {
      return num;
    }
  };

  const plusSlide = (slide: any) => {
    changeSlide(randomNum(1, 111, slide));
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={'mt-[52px]  mr-[40px] ml-[345px] flex flex-col'}>
      <div className=' mb-1 w-fit flex h-[14px]'>
        <h1 className='select-all text-[14px] leading-[14px] font-light mr-5'>
          {imageList[slide].title}
        </h1>
        <p className='select-none text-[14px] leading-[14px] font-extralight'>
          {imageList[slide].location}
        </p>
      </div>
      {/* <div className='select-none flex text-right justify-end w-[100%] h-fit mt-1'>
        <div className='flex justify-end'>
          <a
            onClick={minusSlide}
            className=' mr-[4px] text-[14px] leading-[14px] px-[2px] cursor-pointer font-light'
          >
            prev
          </a>
          <div className=' mr-[4px] text-[14px] leading-[14px] font-light'>
            /
          </div>
          <a
            onClick={plusSlide}
            className='text-[14px] leading-[14px] px-[2px] cursor-pointer font-light'
          >
            next
          </a>
        </div>
      </div> */}

      <AnimatePresence>
        <motion.div
          className='relative'
          key={slide}
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{ type: 'ease-in-out' }}
        >
          <Image
            className='absolute max-h-[85vh] w-fit cursor-pointer border select-none'
            onClick={plusSlide}
            src={'/../public/static/img/' + imageList[slide].src}
            alt='/'
            width={1100}
            height={700}
            quality={90}
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentNow2;
