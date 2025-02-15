import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Brain, Palette, Wrench } from 'lucide-react'; // Icons
import textureB from '../assets/spiration-dark.webp';
import abstractBrainHeart from '../assets/images/abstract-brain-heart.jpg';

const projectData = [
  { id: 1, title: "Globethoughts", link: "https://www.globe-thoughts.com", icon: <Globe className="text-blue-400" /> },
  { id: 2, title: "Memeplex", link: "https://www.memeplex.pro", icon: <Brain className="text-red-400" /> },
  { id: 3, title: "Apex", link: "https://www.apex-vets.pro", icon: <Palette className="text-green-400" /> },
  { id: 4, title: "Nexus", link: "https://www.nexus-vets.pro", icon: <Wrench className="text-yellow-400" /> }
];

const Home = () => (
  <div className="min-h-screen text-white flex flex-col relative">
  <div 
        className="absolute inset-0"  // Changed to inset-0
        style={{ 
          backgroundImage: `url(${textureB})`, 
          backgroundRepeat: 'repeat',
          zIndex: 0
        }} 
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(0,48,0,0.75), rgba(0,0,0.42), rgba(0,0,170,0.35))',
          zIndex: 1
        }}
      />
    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-col items-center mt-[10vh] justify-center px-6 sm:px-12 min-h-screen">
      
      {/* Centered Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="md:w-50 md:h-[50vh] rounded-full mt-[16vh] m-8 mb-10 overflow-hidden border-[1.4rem] border-white/20 shadow-xl flex justify-center">
        <img src={abstractBrainHeart} alt="Abstract Brain and Heart" className="object-cover w-full h-full" />
      </motion.div>

      {/* Core Message - Scales Correctly */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.66 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 20, ease: 'easeOut' }}
        className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-wide text-green-400"
      >
        Where is your freedom?
      </motion.h1>

      {/* Gradual Appearance of Text (Timed for Scroll) */}
      <div className="text-center max-w-3xl mt-8 sm:font-bold">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 7, ease: 'easeOut' }}
          className="text-[clamp(0.4rem,3vw,1.2rem)] mt-5 font-light tracking-wide text-blue-100"
        >
          The more we define ourselves, the more we forget what we are.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration:5, ease: 'easeOut' }}
          className="text-[clamp(0.38rem,2.7vw,1.2rem)] mt-5 font-light tracking-wide font-light text-blue-100"
        >
          Unnecessary self-definitions and limits breed insecurity and corruption.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 15, duration: 2, ease: 'easeOut' }}
          className="text-[clamp(0.5rem,3.5vw,1.6rem)] mt-5 px-1 font-medium tracking-wide text-yellow-100"
        >
          Freedom, clarity, and connection are available in their absence.
        </motion.p>
      </div>
    

    {/* Projects & Footer Section - Pulls Footer Up */}
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 15, duration: 4, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center my-12 flex-grow px-2">
      
      {/* Placeholder Note - Styled for Readability */}
      <p className="text-sm text-center text-gray-400 mt-10 font-semibold sm:font-md">
        These are <span className="text-blue-600 italic font-medium">full-stack sites</span> <span className="underline text-white">currently in development</span>, using either
        <span className="text-green-600 font-bold"> MongoDB</span> or
        <span className="text-blue-600 font-bold"> PostgreSQL. </span>
        <span>Placeholder sites will be live soon</span> <span className="text-orange-300">(Feb 2025)</span>.
      </p>

      {/* Project Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg font-medium">
        {projectData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-105 transition-transform duration-300"
          >
            {project.icon} <span className="font-semibold">{project.title}</span>
          </a>
        ))}
      </div>
      </motion.div>
    </div>
  </div>
  
);

export default Home;
