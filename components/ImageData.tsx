import React from 'react';
import { useState } from 'react';

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img4.jpg'];

const ImageData = ({
  slide,
  changeSlide,
}: {
  slide: number;
  changeSlide: Function;
}) => {
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

  );
};

export default ImageData;
