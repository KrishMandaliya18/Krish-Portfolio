import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import profileImg from '../assets/Profile.jpg'; 
import Navbar from './Navbar';
import Project from './Project';

const Home = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">
      
      {/* Main Container: Iski height fix kar di hai taki scroll na aaye */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          
          {/* Left Side: Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-[#4ade80] text-xs md:text-sm font-medium mb-2 tracking-[0.2em] uppercase">
              Welcome to my portfolio
            </h2>
            
            <h1 className="text-3xl md:text-6xl text-white lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-[#4ade80]">Krish</span> <br />
              
              <div className="text-[#4ade80] text-xl md:text-4xl lg:text-5xl mt-2 flex gap-2">
                <Typewriter
                  options={{
                    strings: [
                      'Frontend Developer',
                      'UI/UX Designer',
                      'Video Editor'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h1>
            
            <div className="mb-8">
              <p className="text-gray-400 text-sm md:text-lg font-light max-w-lg leading-relaxed">
           I am a versatile professional skilled in Frontend Development (React.js), UI/UX Design, and Video Editing. I use AI tools to speed up my workflow, from writing efficient code to designing intuitive interfaces in Figma and Canva. I focus on merging technology with creativity to deliver high-quality, modern digital solutions.
              </p>
            </div>

            {/* <button className="group bg-[#4ade80] hover:bg-[#3dbd6b] text-black font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg flex items-center gap-3 transition-all duration-300 transform hover:translate-y-[-2px]">
              Resume
              <HiArrowNarrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </button> */}
          </div>

          {/* Right Side: Profile Image */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-[#4ade80] rounded-full blur-[60px] opacity-10 animate-pulse"></div>
              
              {/* Circular Image Container: Size thoda chota kiya hai fit hone ke liye */}
              <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-[#4ade80]/30 p-3 md:p-4">
                 <div className="w-full h-full rounded-full border-2 border-[#4ade80] overflow-hidden bg-zinc-900">
                    <img 
                      src={profileImg} 
                      alt="Krish Profile"
                      /* object-top aur object-cover face ko properly align karenge */
                      className="w-full h-full object-top object-cover scale-110"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Profile+Photo"; }}
                    />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;