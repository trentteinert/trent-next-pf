import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ContentNow2 = ({
  imageList,
  bioText,
  archive,
  slide,
  changeSlide,
}: {
  imageList: any;
  bioText: boolean;
  archive: boolean;
  slide: number;
  changeSlide: Function;
}) => {
  let d = new Date();
  let n = d.getDate();
  let start = imageList[n - 1];

  useEffect(() => {
    function incrementNum() {
      changeSlide(() => start.id);
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
            src={'/../public/images/Now/' + imageList[slide].src}
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
