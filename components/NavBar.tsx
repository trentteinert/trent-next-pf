import React, { useEffect } from 'react';
import BioText from './BioText';
import Archive from './Archive';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = ({
  bioText,
  bioTextChange,
}: {
  bioText: any;
  bioTextChange: any;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };

  const handleBio = () => {
    bioTextChange(!bioText);
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'ease-in-out' }}
      >
        <main className='select-none z-0 absolute w-[250px] h-fit top-[50px] mb-[0px] ml-[50px]'>
          <div>
            <h1 className='text-[17px] leading-[17px] cursor-pointer mb-[2px] font-medium'>
              <Link href={'/'}>Trent Teinert</Link>
            </h1>
            <p className='text-[14px] leading-[14px] cursor-pointer font-light'>
              <Link href={'mailto:trentteinert@gmail.com'}>
                contact@trentteinert.com
              </Link>
            </p>
          </div>
          <ul className='w-[150px] flex mt-[5px]'>
            <li
              onClick={handleBio}
              className='text-[14px] font-light px-1 mr-2 leading-[14px]'
            >
              bio
            </li>
            <li className='text-[14px] leading-[14px]'>
              <Link className='font-light px-1 mr-2' href={'/cv'}>
                cv
              </Link>
            </li>
            <li className='text-[14px] hover:line-through font-extralight px-1 mr-2 leading-[14px]'>
              archive
            </li>
          </ul>
          <AnimatePresence>
            <motion.div
              className={bioText ? 'block' : 'hidden'}
              key={bioText}
              variants={variants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{ type: 'ease-in-out' }}
            >
              <BioText />
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
