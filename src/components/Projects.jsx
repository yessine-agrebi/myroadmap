import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ReactGA from 'react-ga';
const Projects = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <div className="flex flex-col bg-white items-center justify-center gap-5 py-5">
      {projects
        ? projects.map((project) => {
            return (
              <div className="md:w-1/2 w-3/4  flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold text-center py-8">
                  {project.title}
                </h1>
                <iframe
                  className='md:w-full w-50 h-[300px]'
                   
                  src={project.link}
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

export default Projects;
