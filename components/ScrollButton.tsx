import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-fit h-fit '>
      {scrollTop && (
        <button
          className='transition-all duration-200 scrollbtn fixed bottom-[50px] rounded-r w-[40px] h-[40px]'
          onClick={scrollUp}
        >
          &#8593;
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
