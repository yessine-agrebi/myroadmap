import React from 'react';
import Front from '../assets/front.png';
import Back from '../assets/back.jpg';
import Projects from '../assets/project.png';
import Algo from '../assets/algo.png';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-full rounded-lg" src={Front} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Frontend Develoment
          </h2>
          <Link
            to="/frontend"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-white"
          >
            Start Now
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-full rounded-lg" src={Back} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Backend Development
          </h2>
          <Link
            to="/backend"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-white"
          >
            Start Now
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-full rounded-lg" src={Projects} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Projects Tutorials
          </h2>
          <Link
            to="/projects"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-white"
          >
            Start Now
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-full rounded-lg" src={Algo} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Algorithms</h2>
          <Link
            to="/algorithms"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-white"
          >
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
