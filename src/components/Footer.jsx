import React from 'react';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-5 px-4 flex flex-col md:flex-row justify-between items-center text-gray-300">
      <h1 className="text-3xl font-bold text-[#00df9a]">MyRoadmap</h1>
      <p className="py-4">Made with ❤️ By Yessine Agrebi</p>
      <div className="flex justify-center items-center gap-6 my-6">
        <a href="https://www.facebook.com/yessine.ragnar" target="_blank" rel="noreferrer">
          <FaFacebookSquare size={30} />
        </a>
        <a href="https://www.instagram.com/yessine.dev" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.twitter.com/yessineagrebi" target="_blank" rel="noreferrer">
          <FaTwitterSquare size={30} />
        </a>
        <a href="https://www.linkedin.com/yessine-agrebi" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.github.com/yessine-agrebi" target="_blank" rel="noreferrer">
          <FaGithubSquare size={30} />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
