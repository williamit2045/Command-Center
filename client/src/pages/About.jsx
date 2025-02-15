import React from 'react';
import { Shield, Brain, Globe, Code, Linkedin, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import textureB from '../assets/double-bubble-dark.webp';
import texture from '../assets/connectwork.webp';
import bridge from '../assets/images/bridge.webp';

// CardSection component with PropTypes
const CardSection = ({ title, items, textColor }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <motion.a
          style={{
            backgroundImage: `url(${texture})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            border: '0.5rem solid rgba(140, 140, 100, 0.2)'
          }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <item.icon className="h-8 w-8 text-blue-400" />
          <div>
            <h3 className="text-xl font-semibold text-blue-400 hover:text-white">{item.title}</h3>
            <p className="text-sm text-green-300">{item.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

// PropTypes for CardSection
CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

const About = () => {
  const techSkills = [
    { title: 'Full-Stack Website Development', description: 'Building apps using Node.js, Express, Next.js, MongoDB, and PostgreSQL.', icon: Code, link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs' },
    { title: 'Data Analysis', description: 'Experienced with SQL, Python, basic Machine Learning, and data visualization tools.', icon: Brain, link: 'https://www.python.org/' },
    { title: 'UI/UX Design', description: 'Proficient in Adobe Photoshop, Illustrator, Figma, and responsive interface design.', icon: Shield, link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility' },
    { title: 'Web Economics & Innovation', description: 'Deep understanding of emerging tech markets and industry trends.', icon: Shield, link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility' }
  ];

  const interests = [
    { title: 'Paleontology and Macro-Evolutionary Mechanisms', description: 'Deep history points to the punctuating equilibrium of our time.', icon: Globe, link: 'https://en.wikipedia.org/wiki/Evolution' },
    { title: 'Collective Intelligence', description: 'We live in an era of another singularity emerging from human groups.', icon: Globe, link: 'https://en.wikipedia.org/wiki/Collective_intelligence' },
    { title: 'Philosophy of Neuroscience and Consciousness', description: 'Matter and energy are interchangeable, along with time, space, and cognition.', icon: Brain, link: 'https://cogsci.ucsd.edu/' },
    { title: 'Comparative Religion', description: 'Religions of the world are languages that should be translated, not opposed.', icon: Globe, link: 'https://en.wikipedia.org/wiki/Comparative_religion' }
  ];

  const education = [
    { title: 'UCSD BA in Psychology (2013)', description: 'Specialized in Cognitive Science, Philosophy of Mind, and Consciousness Studies.', icon: Brain, link: 'https://catalog.ucsd.edu/curric/PSYC-ug.html' },
    { title: 'Web Media Certificate (2013)', description: 'Comprehensive web development program focusing on JavaScript and UI/UX.', icon: Code, link: 'https://extendedstudies.ucsd.edu/courses-certificates/digital-arts/graphic-web-design' },
    { title: 'Udemy Web Development Bootcamp (2022)', description: 'Hands-on experience with modern web technologies and frameworks.', icon: Code, link: 'https://www.udemy.com/course/the-web-developer-bootcamp/' }
  ];

  const experiences = [
    { title: 'US Navy (2003-2007)', description: 'Served with honor across Japan, Bahrain, and South Korea.', icon: Shield, link: 'https://www.navy.mil/' },
    { title: 'TEDx Conference Organizer, UCSD (2012)', description: 'Focused on humanity\'s future, fostering dialogue on innovation.', icon: Brain, link: 'https://www.ted.com/tedx' }
  ];

  return (
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
          backgroundImage: 'linear-gradient(10deg, rgba(0,0,0,0.92), rgba(0,0,0.42), rgba(160,20,25,0.40))',
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
        <img src={bridge} alt="Bridge" className="object-cover w-full h-full" />
      </motion.div>


        <motion.h1 
          initial={{ opacity: 0, scale: 0.66 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 20, ease: 'easeOut' }} 
          className="text-[clamp(2rem,5vw,3rem)] mb-4 font-medium tracking-wide text-green-400"
        >
          Living on the Edge
        </motion.h1>

        {/* Slightly refined messaging while keeping the core meaning */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 7, ease: 'easeOut' }}
          className="text-[clamp(0.5rem,2.5vw,1.4rem)] mx-4 font-light tracking-wide text-blue-100"
        >
          From foster care, to the Navy, to the intersections of world-cultures and academic disciplines, I&apos;ve found insight at the boundaries where different worlds meet.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 7, ease: 'easeOut' }}
          className="text-[clamp(0.5rem,2.5vw,1.4rem)] m-4 font-light tracking-wide text-blue-100"
        >
          Through this journey, I&apos;ve learned to reconcile apparent contradictions and find coherent patterns in complexity that others might overlook.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 7, ease: 'easeOut' }}
          className="text-[clamp(0.5rem,2.5vw,1.4rem)] mx-4 font-light tracking-wide text-blue-100"
        >
          The greatest challenge isn&apos;t finding truth, but communicating it in ways that bridge understanding rather than create distance.
        </motion.p>
      </div>

      {/* Card sections with relative positioning */}
      <div className="relative z-10">
        <CardSection title="Tech Skills" items={techSkills} textColor="text-blue-400" />
        <CardSection title="Interests" items={interests} textColor="text-blue-400" />
        <CardSection title="Education" items={education} textColor="text-blue-400" />
        <CardSection title="Experience" items={experiences} textColor="text-blue-400" />
        
      </div>


      {/* Philosophical reflection */}
      <div className="relative z-20 w-full mt-20 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 3 }}
            className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            style={{
              backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.8), rgba(20,20,40,0.9))',
            }}
          >
            <h2 className="text-2xl font-semibold text-center text-green-400 mb-12">On The Value of Mistakes:</h2>
            
            <div className="space-y-8">
              <p className="text-white/90 leading-relaxed text-lg">
                Is it not a dangerous deception to believe that money and control can &quot;fix&quot; people&mdash;stifling their growth rather than fostering it? How else do we truly learn if not by making order out of the chaos of mistakes?
              </p>
              
              <p className="text-white-200/90 leading-relaxed text-lg">
                Mistakes, yet to be made, are gifts to society&mdash;opportunities for meaning to rescue us from the banality of evil. Those who make mistakes should be honored, not humiliated.
              </p>
              
              <p className="text-white/90 leading-relaxed text-lg">
                Mistakes reveal our weak points, offering a chance to strengthen them. But when insecurity is validated instead of resilience, we set a course toward ruin.
              </p>
              
              <p className="text-white-200/90 leading-relaxed text-lg">
                I admit, I am both enraged and terrified to see so many reject this truth&mdash;clinging to illusions of security or superiority, fearing risks, suppressing authenticity, and avoiding the very failures that shape us into who we must become for life to be worthwhile.
              </p>
              
              <p className="text-white/90 leading-relaxed text-lg">
                When others intervene to &quot;help,&quot; my deepest fear is how my own need for acceptance makes it easy to comply with shame rather than embrace the growth in my mistakes.
              </p>
              
              <p className="text-white-200/90 leading-relaxed text-lg">
                And in the end, if shame brings no reward, the blame still falls on me&mdash;for allowing misguided authority to distort the lesson, for silencing what I know to be true: A first shame for calling my mistakes bad. A second for doubting that truth was ever worth expressing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;