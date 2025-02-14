import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import textureB from '../assets/images/artworks-000373153020-rrpx00-t500x500.jpg';
import textureA from '../assets/connectwork.webp';
import sand from '../assets/images/sand.webp';

const projectData = [
  {
    id: 1,
    icon: "🌐",
    title: "Globethoughts",
    subtitle: "A platform for collective intelligence.",
    techStack: "Node.js, Express, MongoDB",
    valuation: "$5M - $10M by 2027",
    business: "A nonprofit funded by academic and private sponsorships, subscription-based services, user-taught ads for free content, and tips for user-curators.",
    category: "Community Groups",
    link: "https://www.globe-thoughts.com"
  },
  {
    id: 2,
    icon: "🧠",
    title: "Memeplex",
    subtitle: "Relational Blogging Network",
    techStack: ["React", "Next.js", "PostgreSQL"],
    valuation: "$100K in 2 years",
    business: "Increases metadata through user engagement, building collective knowledge.",
    category: "Knowledge Enthusiasts",
    link: "https://www.memeplex.pro"
  },
  {
    id: 3,
    icon: "🎨",
    title: "Apex",
    subtitle: "Creative Marketplace",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    valuation: "$500K in 2 years",
    business: "Starts with t-shirt design and expands to a full creative marketplace.",
    category: "Creative Entrepreneurs",
    link: "https://www.apex-vets.pro"
  },
  {
    id: 4,
    icon: "🔧",
    title: "Nexus",
    subtitle: "Innovation Hub",
    techStack: ["Next.js", "Prisma", "React"],
    valuation: "$750K in 2 years",
    business: "Combines physical and digital spaces to foster innovation and support veterans.",
    category: "Veteran Innovators",
    link: "https://www.nexus-vets.pro"
  }
];

const ProjectCard = ({ project }) => (
  <div
    className="bg-black overflow-hidden transition-all duration-300 hover:bg-texture"
    style={{
      backgroundImage: `url(${textureA})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      border: '18px solid rgba(44, 50, 221, 0.1)',
    }}
  >
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-blue-400">{project.subtitle}</p>
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <ExternalLink className="h-6 w-6" />
        </a>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-gray-400">
          <span className="text-gray-300">Tech Stack:</span> {project.techStack}
        </div>
        <div className="text-sm text-gray-400">
          <span className="text-gray-300">Target:</span> {project.category}
        </div>
        <p className="text-gray-300 text-sm">{project.business}</p>
        <div className="text-sm text-green-400">
          Projected Value: {project.valuation}
        </div>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string.isRequired,
    techStack: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    category: PropTypes.string,
    business: PropTypes.string,
    valuation: PropTypes.string,
  }).isRequired,
};

const Projects = () => {
  return (
    <div
    className="min-h-screen text-white relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${textureB})`,
      backgroundSize: 'cover', /* Ensures full-screen coverage */
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll', /* Works across browsers */
    }}
  >
  
    {/* Semi-Transparent Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-12 min-h-screen">
      
      {/* Centered Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full mt-36 mb-10 overflow-hidden border-4 border-white/20 shadow-xl flex justify-center"
      >
        <img src={sand} alt="Sand" className="object-cover w-full h-full" />
      </motion.div>

      {/* Core Message - Scales Correctly */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.66 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="text-[clamp(1rem,3vw,2rem)] font-medium tracking-wide text-amber-400"
      >
        Substance Moves Through an Endless Moment.
      </motion.h1>

      {/* Gradual Appearance of Text (Timed for Scroll) */}
      <div className="text-center max-w-4xl mt-[25vh] font-semibold">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 12, ease: 'easeOut' }}
          className="text-[clamp(1.4rem,3vw,2.4em)] mt-[5vh] font-light text-blue-300 whitespace-nowrap sm:whitespace-normal text-center">
          Time, mind, self—that which cannot be destroyed.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 12, duration: 9, ease: 'easeOut' }}
          className="text-[clamp(0.6rem,3vw,1.2rem)] mt-[10vh] font-light text-blue-300 whitespace-nowrap sm:whitespace-normal text-center"
        >
          Yet those who defy their labels, acknowledging the simple truth are nothing, are heard as boasting.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 15, duration: 5, ease: 'easeOut' }}
          className="text-[clamp(0.6rem,3vw,1.2rem)] mt-[10vh] font-light text-blue-300"
        >
          ...and so the trials come.
        </motion.p>
      </div>
    </div>

    {/* Project Cards */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-6 sm:px-12">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 3, ease: 'easeOut' }}
      className="relative z-10 text-[clamp(0.7rem,2.8vw,1.3rem)] m-[7vh] font-small text-red-500 whitespace-nowrap sm:whitespace-normal text-center"
    >
      To see honorably is to see as if for the first time—without the weight of habit.
    </motion.p>
  </div>
);
};

export default Projects;
