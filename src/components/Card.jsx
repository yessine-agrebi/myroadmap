import React from 'react'
const Card = ({course}) => {
  return (
<div className="md:w-full w-5/6 mt-3 bg-slate-200 rounded-lg shadow-lg lg:max-w-sm">
            <img
                className="object-cover w-full h-48 rounded-lg"
                src={course.image}
                alt={course.title}
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {course.title}
                </h4>
                <p className="mb-2 leading-normal">
                    {course.description}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    <a href={course.link} target="_blank" rel='noreferrer'>Start Learning</a>
                </button>
            </div>
            </div>
  )
}

export default Card
