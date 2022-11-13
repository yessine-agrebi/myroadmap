import React from 'react'
import Card from './Card';
import {frontend} from '../data/frontend';
const Frontend = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 sm:mx-auto'>
      {frontend ? frontend.map((course, index) => {
          return (
            
            <Card key={index} course={course} />
            )
        }): "No courses available"}
    </div>
  )
}

export default Frontend
