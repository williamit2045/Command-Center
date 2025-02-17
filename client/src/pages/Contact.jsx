import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import emailjs from '@emailjs/browser';
import textureA from '../assets/folk-pattern-black.webp';
import textureB from '../assets/spiration-dark.webp';
import textureC from '../assets/carbon_fibre.webp';
import individual from '../assets/images/individual.webp';

const SOCIAL_LINKS = [
 { name: 'GitHub', url: 'https://github.com/williamit2045', icon: Github, description: 'Check out my open source projects and contributions.' },
 { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jdunbaugh/', icon: Linkedin, description: 'Connect with me professionally and see my journey.' },
 { name: 'Twitter', url: 'https://twitter.com/jdunbaugh', icon: Twitter, description: 'Follow my thoughts and updates.' },
 { name: 'Medium', url: 'https://medium.com/@mathewjamie/the-search-for-consciousness-two-hard-problems-and-a-bunch-of-absurdities-6b516bf5178c', icon: BookOpen, description: 'Read about my journey and insights on Medium.' },
 { name: 'Blog: Moral Apex', url: 'https://moralapex.wordpress.com/', icon: BookOpen, description: 'Explore my blog focused on ethical discussions.' },
 { name: 'Blog: Transhumanities', url: 'https://transhumanities.wordpress.com/', icon: BookOpen, description: 'Thoughts on transhumanism and future tech.' },
 { name: 'Blog: Ascension of Being', url: 'https://ascensionofbeing.wordpress.com/', icon: BookOpen, description: 'Exploring the human experience and personal growth.' },
 { name: 'Blog: JDunbaugh', url: 'https://jdunbaugh.wordpress.com/', icon: BookOpen, description: 'My personal blog on a variety of topics.' },
];

const Contact = () => {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 const [status, setStatus] = useState('');

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setStatus('sending');
   try {
     await emailjs.send(
       'service_6qtvoms',
       'template_qh8il3o',
       {
         to_email: 'williamit2060@gmail.com',
         from_name: formData.name,
         from_email: formData.email,
         message: formData.message,
       },
       '8_OlTHxuidKtAWkDh'
     );
     setStatus('success');
     setFormData({ name: '', email: '', message: '' });
   } catch {
     setStatus('error');
   }
 };

 return (
   <div className="min-h-screen text-amber" style={{ backgroundImage: `url(${textureA})`, backgroundRepeat: 'repeat' }}>
     <div className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: 'easeOut' }}
         className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex justify-center"
       >
         <img src={individual} alt="Abstract Brain and Heart" className="object-cover w-full h-full" />
       </motion.div>

       <motion.h1
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.2, ease: 'easeOut' }}
         className="text-5xl sm:text-4xl font-light mt-10 tracking-wide text-yellow-100"
       >
         Truth is self evident.
       </motion.h1>
     </div>

     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
       <div className="lg:col-span-8 prose prose-invert max-w-none">
         <h2 className="text-2xl font-bold text-green-300 mb-6">A Word on Truth & Integrity</h2>
         <div className="space-y-4 text-green-300">
           <p>Some assume I'm not serious, but maybe that's because we've made authenticity so costly that we barely recognize it anymore. Truth doesn't need defending—it needs living.</p>

           <p>What many call life's great secret is no secret at all—it's simply that truth is self-evident, yet entire populations are made to feel uncomfortable honoring the obvious. Those who "know the secret" are just those who refuse to betray their simple, present truth. They accept the inferences that follow from it, understanding that necessary mistakes and periods of doubt are part of the journey.</p>

           <p>Comprehension grows when we stop resisting our simple, present truth. Ironically, those who understand this are often seen as dangerous, when they're actually the most reliable allies. Why? Because clarity demands mistakes. These very mistakes refine skill, test integrity, and prepare us for moments of chaos. Without them, we risk stagnation, anxiety, and a slow erosion of peace.</p>

           <p>This website serves three essential purposes:</p>
           <ol className="list-decimal pl-6 space-y-2">
             <li>A professional portfolio showcasing innovative work and ideas</li>
             <li>A hub for AI integration and web development advancement</li>
             <li>An anchor—a reminder of the integrity I refuse to compromise</li>
           </ol>

           <p>We've made authenticity costly, conditioning entire generations to silence. Our digital age has transformed genuine expression into a commodity, where social media hasn't just enabled illusion—it has perfected it into an art form.</p>

           <p>I never wanted responsibility, but awareness brings obligation. My focus remains on creating meaningful impact through projects like <em>Globethoughts</em>, designed to serve genuine human needs. If these words provoke thought, ask yourself: Who benefits from your reaction? Those who challenge your certainties—or those who depend on your doubt?</p>

           <p>In the end, being oneself without compromise might be the rarest and most powerful act possible. If it's this challenging for me, imagine its potential for everyone.</p>
         </div>
       </div>

       <div className="lg:col-span-4 space-y-6">
         <h3 className="text-md text-yellow-300 font-light italic text-center mb-4">It is our ends that connect us, not our understanding:</h3>
         <div className="flex flex-col space-y-4">
           {SOCIAL_LINKS.map(({ name, url, icon: Icon, description }) => (
             <motion.a
               key={name}
               href={url}
               target="_blank"
               rel="noopener noreferrer"
               className="group relative bg-gray-800/40 p-6 rounded-lg flex items-start space-x-4 hover:bg-gray-700/60 transition-all duration-300"
               style={{ 
                 backgroundImage: `url(${textureC})`, 
                 backgroundRepeat: 'repeat',
                 backdropFilter: 'blur(8px)',
               }}
               whileHover={{ scale: 1.02, y: -2 }}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
             >
               <div className="absolute inset-0 bg-blue-500/5 rounded-lg group-hover:bg-blue-500/10 transition-colors duration-300"/>
               <Icon className="h-6 w-6 text-blue-400 flex-shrink-0 relative z-10 group-hover:text-blue-300 transition-colors duration-300" />
               <div className="relative z-10">
                 <h4 className="text-lg font-medium text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                   {name}
                 </h4>
                 <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                   {description}
                 </p>
               </div>
             </motion.a>
           ))}
         </div>
       </div>
     </div>

     <div className="max-w-2xl mx-auto mt-16 mb-16 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 to-gray-900/90 backdrop-blur-sm"/>
       <div className="relative z-10 p-8 rounded-lg">
         <h3 className="text-xl text-center text-amber-300 mb-8 italic font-light">
           The only reason common sense is uncommon is that self-doubt is too common.
         </h3>
         <form onSubmit={handleSubmit} className="space-y-8">
           {['email', 'message'].map((field) => (
             <div key={field} className="group">
               <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2 capitalize transition-colors duration-300 group-focus-within:text-blue-300">
                 {field}
               </label>
               {field === 'message' ? (
                 <textarea
                   id={field}
                   name={field}
                   value={formData[field]}
                   onChange={handleChange}
                   required
                   rows={4}
                   className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                     transition-all duration-300 placeholder-gray-500"
                   placeholder="Be as you are - the world needs it."
                 />
               ) : (
                 <input
                   type={field}
                   id={field}
                   name={field}
                   value={formData[field]}
                   onChange={handleChange}
                   required
                   className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                     transition-all duration-300"
                 />
               )}
             </div>
           ))}
           <motion.button
             type="submit"
             disabled={status === 'sending'}
             className="w-full bg-blue-600/90 hover:bg-blue-700 text-white font-medium py-4 rounded-lg
               transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
             whileHover={{ scale: 1.01 }}
             whileTap={{ scale: 0.99 }}
           >
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 
               group-hover:translate-x-full transition-transform duration-1000"/>
             {status === 'sending' ? 'Sending...' : 'Be as you are'}
           </motion.button>
           
           {status === 'success' && (
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-green-400 text-center"
             >
               Message sent successfully!
             </motion.p>
           )}
           {status === 'error' && (
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-red-400 text-center"
             >
               Failed to send message. Please try again.
             </motion.p>
           )}
         </form>
       </div>
     </div>
   </div>
 );
};

Contact.propTypes = {
 SOCIAL_LINKS: PropTypes.arrayOf(
   PropTypes.shape({
     name: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired,
     icon: PropTypes.elementType.isRequired,
     description: PropTypes.string.isRequired,
   })
 ),
};

export default Contact;
