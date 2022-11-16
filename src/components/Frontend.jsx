import React, { useEffect } from 'react'
import Card from './Card';
import {frontend} from '../data/frontend';
import ReactGA from 'react-ga';
const Frontend = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      {frontend ? frontend.map((course, index) => {
          return (
            
            <Card key={index} course={course} />
            )
        }): "No courses available"}
    </div>
  )
}

export default Frontend
