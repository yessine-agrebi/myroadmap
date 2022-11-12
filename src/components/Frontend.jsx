import React from 'react'
import Card from './Card';
import {frontend} from '../data/frontend';
const Frontend = () => {
  return (
    <>
      {frontend ? frontend.map((course, index) => {
          return (
            <Card key={index} course={course} />
            )
        }): "No courses available"}
    </>
  )
}

export default Frontend
