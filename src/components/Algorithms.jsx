import React, { useEffect } from 'react';
import { algorithms } from '../data/algorithms';
import ReactGA from 'react-ga';
const Algorithms = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="flex flex-col bg-white items-center justify-center gap-5 py-5">
      {algorithms
        ? algorithms.map((course) => {
            return (
              <div>
                <h1 className="text-xl font-bold text-center py-8">
                  {course.title}
                </h1>
                <iframe
                  className='md:w-full w-50 h-[300px]'
                  src={course.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })
        : 'No courses available'}
    </div>
  );
};

export default Algorithms;
