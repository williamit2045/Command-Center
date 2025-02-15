import React from 'react';
import { ExternalLink } from 'lucide-react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import textureB from '../assets/double-bubble-dark.webp';
import textureA from '../assets/connectwork.webp';
import sand from '../assets/images/sand.webp';

const projectData = [
  {
    id: 1,
    icon: "🌐",
    title: "Globethoughts",
    subtitle: "A Social-Insight Tool and platform for Human Collective Intelligence.",
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
    subtitle: "A Relational Knowledge-Blogging Network for Distilling Public Knowledge from User Content",
    techStack: ["React", "Next.js", "PostgreSQL"],
    valuation: "$100K in 2 years",
    business: "Increases metadata through user engagement, building collective knowledge.",
    category: "Knowledge Enthusiasts",
    link: "https://www.memeplex.pro"
  },
  {
    id: 3,
    icon: "🎨",
    title: "ApexVets",
    subtitle: "Starting with T-Shirt Designs - to become an online Creative Marketspace for curating and selling Novelty Gear",
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
    subtitle: "Starting with Physical Space for 3D printing & Intended to Self-Fullfill a Veterans-first Innovation Hub",
    techStack: ["Next.js", "Prisma", "React"],
    valuation: "$750K in 2 years",
    business: "Combines physical and digital spaces to foster innovation and support veterans.",
    category: "Veteran Innovators",
    link: "https://www.nexus-vets.pro"
  }
];

const ProjectCard = ({ project, index }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
    {/* Card - alternates between left and right */}
    <div className={`w-full md:w-2/3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
      <div
        className="bg-black overflow-hidden transition-all duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${textureB})`,
          backgroundSize: '',
          backgroundRepeat: 'repeat',
          border: '1rem solid rgba(20,100,150,0.15)',
          borderRadius: '1rem',
        }}
      >
        <div className="p-6 space-y-4 h-full" style={{
          background: `linear-gradient(65deg, 
            rgba(170,50,20,0.7), 
            rgba(100,150,200,0.5), 
            rgba(60,20,80,0.95)
          )`,
          backdropFilter: 'blur(8px)',
        }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-4xl transform hover:scale-110 transition-transform duration-300">
                {project.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-blue-300">{project.subtitle}</p>
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors duration-300"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-sm">
              <span className="text-green-200">Tech Stack:</span>{' '}
              <span className="text-gray-300">{project.techStack}</span>
            </div>
            <div className="text-sm">
              <span className="text-green-200">Target:</span>{' '}
              <span className="text-gray-300">{project.category}</span>
            </div>
            <p className="text-gray-200 text-sm">{project.business}</p>
            <div className="text-sm text-green-300 font-semibold">
              Projected Value: {project.valuation}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Description - alternates between left and right */}
    <div className={`w-full md:w-1/3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className="text-gray-300 space-y-4"
      >
        <h4 className="text-xl font-semibold text-green-200 mb-4">Why {project.title}?</h4>
        <p className="leading-relaxed">
          {project.business}
        </p>
        <div className="pt-4">
          <span className="text-amber-200 font-medium">Target Market: </span>
          <span className="text-gray-300">{project.category}</span>
        </div>
      </motion.div>
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
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <div className="min-h-screen text-white flex flex-col relative">
      {/* Background layers */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${textureA})`, 
          backgroundRepeat: 'repeat',
          zIndex: 0
        }} 
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(194,178,128,0.92), rgba(0,0,40,0.99), rgba(210,178,148,0.42))',
          zIndex: 1
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col">
        {/* Hero section */}
        <div className="flex flex-col items-center mt-20 mb-16 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="md:w-50 md:h-[50vh] rounded-full mb-10 overflow-hidden border-8 border-white/20 shadow-xl flex justify-center"
          >
            <img src={sand} alt="Abstract Brain and Heart" className="object-cover w-full h-full" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 12, ease: 'easeOut' }}
            className="text-[clamp(1.2rem,3vw,2.4rem)] font-medium text-amber-200 text-center"
          >
            Substance Moves Through an Endless Moment.
          </motion.h1>

          <div className="text-center max-w-4xl mt-8 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6, duration: 7, ease: 'easeOut' }}
              className="text-lg text-gray-300"
            >
              That endless moment is time, mind, and self: you, me, and everyone&mdash;That which cannot be destroyed...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 10, duration: 11, ease: 'easeOut' }}
              className="text-lg text-gray-300"
            >
              Yet, those who actualize this simple truth are heard as boasting,
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 18, duration: 7, ease: 'easeOut' }}
              className="text-lg text-gray-300"
            >
              ...and so the trials come.
            </motion.p>
          </div>
        </div>

        {/* Projects section */}
        <div className="container mx-auto px-6 mb-16">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Projects;