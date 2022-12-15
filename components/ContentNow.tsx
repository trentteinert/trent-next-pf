import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img4.jpg'];

const ContentNow = ({
  bioText,
  archive,
}: {
  bioText: boolean;
  archive: boolean;
}) => {
  const [slide, changeSlide] = useState(0);

  const plusSlide = () => {
    if (slide < images.length - 1) {
      changeSlide(slide + 1);
    } else {
      changeSlide(0);
    }
  };

  const minusSlide = () => {
    if (slide > 0) {
      changeSlide(slide - 1);
    } else {
      changeSlide(images.length - 1);
    }
  };

  return (
    <div
      className={
        bioText
          ? 'relative bg-blue transition-all duration-500 ml-[295px] w-[60%] h-fit mt-[7px] '
          : 'relative bg-blue transition-all duration-500 ml-[20px] w-[60%] h-fit mt-[7px] ' &&
            archive
          ? 'relative bg-blue transition-all duration-500 ml-[230px] w-[60%] h-fit mt-[7px] '
          : 'relative bg-blue transition-all duration-500 ml-[20px] w-[60%] h-fit mt-[7px]'
      }
    >
      <Image
        className='cursor-pointer border'
        onClick={plusSlide}
        src={'/../public/images/Now/' + images[slide]}
        alt='/'
        width={400}
        height={400}
        layout='responsive'
      />
      <div
        className={
          bioText
            ? 'transition-all duration-500 h-[14px] flex justify-end mt-[15px] '
            : 'transition-all duration-500 h-[14px] flex  justify-end mt-[15px]' &&
              archive
            ? 'transition-all duration-500 h-[14px] flex justify-end mt-[15px]'
            : 'transition-all duration-500 h-[14px] flex  justify-end mt-[15px]'
        }
      >
        <a
          onClick={minusSlide}
          className=' mr-[4px] text-[14px] leading-[14px] px-[2px] cursor-pointer font-light'
        >
          prev
        </a>
        <div className=' mr-[4px] text-[14px] leading-[14px] font-light'>/</div>
        <a
          onClick={plusSlide}
          className=' mr-[30px] text-[14px] leading-[14px] px-[2px] cursor-pointer font-light'
        >
          next
        </a>
      </div>
    </div>
  );
};

export default ContentNow;
