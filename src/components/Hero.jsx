import React, { useEffect } from 'react';
import Typed from 'react-typed';
import Categories from './Categories';
import ReactGA from 'react-ga';

const Hero = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:text-3xl text-2xl'>
          Master Web Develoment With MyRoadmap
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          All For FREE!!
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='md:text-xl text-[#00df9a] sm:text-4xl text-xl font-bold py-4'>
            The Best Ressources In The Internet
          </p>
          <Typed
          className='md:text-lg sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-400'
            strings={['Frontend', 'Backend', 'Algorithms', 'Projects']}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      <Categories />
    </div>
  );
};

export default Hero;
