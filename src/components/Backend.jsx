import React from 'react'
import Card from './Card';
import {backend} from '../data/backend';
const Backend = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      {backend ? backend.map((course, index) => {
          return (
            
            <Card key={index} course={course} />
            )
        }): "No courses available"}
    </div>
  )
}

export default Backend
