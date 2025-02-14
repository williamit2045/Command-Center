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
  <div className="min-h-screen text-white flex flex-col" style={{ backgroundImage: `url(${textureB})`, backgroundRepeat: 'repeat' }}>
    
    {/* Full-Screen Initial Section */}
    <div className="flex flex-col items-center justify-center px-6 sm:px-12 min-h-screen">
      
      {/* Centered Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full mt-36 mb-10 overflow-hidden border-4 border-white/20 shadow-xl flex justify-center"
      >
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
      <div className="text-center max-w-3xl mt-24 sm:font-bold">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 7, ease: 'easeOut' }}
          className="text-[clamp(0.5rem,2.5vw,1.4rem)] mt-[10vh] md:mt-[5vh] font-light tracking-wide text-blue-100"
        >
          The more we define ourselves, the more we forget what we are.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration:5, ease: 'easeOut' }}
          className="text-[clamp(0.38rem,2.4vw,1.25rem)] mt-[10vh] md:mt-[5vh] md:font-semibold tracking-wide font-light text-orange-100"
        >
          Unnecessary self-definitions and limits breed insecurity and corruption.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 15, duration: 2, ease: 'easeOut' }}
          className="text-[clamp(0.4rem,2.5vw,1.5rem)] mt-[10vh] md:mt-[5vh] sm:font-bold tracking-wide text-yellow-200"
        >
          Freedom, clarity, and connection are available in their absence.
        </motion.p>
      </div>
    </div>

    {/* Projects & Footer Section - Pulls Footer Up */}
    <div className="flex flex-col items-center justify-center m-12 flex-grow px-6 sm:px-12">
      
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
    </div>
  </div>
);

export default Home;
