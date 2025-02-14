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
      
      {/* Initial Display Top Section */}
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
      
      {/* Centered Floating Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex justify-center"
      >
        <img src={individual} alt="Abstract Brain and Heart" className="object-cover w-full h-full" />
      </motion.div>

      {/* Core Message */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-5xl sm:text-4xl font-light mt-10 tracking-wide text-yellow-100"
      >
       Truth is self evident.
      </motion.h1>
    </div>
   

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Truth & Integrity Text - Left Column */}
        <div className="lg:col-span-8 prose prose-invert max-w-none">
  <h2 className="text-2xl font-bold text-green-300 mb-6">A Word on Truth & Integrity</h2>
  <div className="space-y-4 text-green-300">
    <p>Some assume I&apos;m not serious, but maybe that&apos;s because we&apos;ve made authenticity so costly that we barely recognize it anymore.</p>

    <p>What many call the secret of the universe is no secret at all—it&apos;s simply that truth is self-evident, and yet entire populations are made to feel uncomfortable honoring the obvious. Those who &quot;know the secret&quot; are just those who refuse to betray their simple, present truth. These who do what is right trust the obvious and accept the inferences that follow from it, confident that others who advertize easire paths are decieving themselves. They also accept they may have to make the mistakes that need making, not because it&apos;s comfortable, but because it&apos;s necessary, legitimate and real - even if they will have to suffer a period of self-doubt before the reckoning comes to account.</p>

    <p>And I will be the first to admit that I am the who need the most pursuading of this.</p>
    <p>Comprehension grows when we stop resisting our simple, present truth. But the irony is that those who understand this are often seen as dangerous, when in reality, they are the safest bet. Why? Because clarity demands mistakes. Mistakes are what refine skill, test integrity, and prepare us for moments of chaos. Without them, the alternative is stagnation, anxiety, and a slow erosion of peace.</p>

    <p>As an intellectual, I myself am guilty of indulging in, and benefitting from academic trivialities. As an outsider, I myself have been fooled into self-doubt. Both are self-deception - one wrongly giving me comfort, the other wrongly giving comfort to another.</p>

    <p>That’s why this website—still in development—serves three core purposes:</p>
    <ol className="list-decimal pl-6 space-y-2">
      <li>My **public portfolio**, showcasing my work, projects, and ideas.</li>
      <li>My **command center**, integrating AI, automation, and web development innovations.</li>
      <li>Most importantly, my **anchor**—a reminder of the integrity I refuse to compromise.</li>
    </ol>

    <p>In moments of doubt, this site stands as a **mirror**—asking me whether my trajectory is truly that of a flake, coward, or madman. Or whether the real madness lies in abandoning what I already know to be true.</p>

    <p>We&apos;ve made authenticity costly, and as a result, entire generations grow up conditioned to silence. When I stand out as myself, I attract those who want to test me, as if my authenticity was a boast of superiority. I wish such people knew the true cost of testing the righteous - a cohort of which I barely care to remain a part of, because there is no need to test authenticity, and no need to presume it a boast. But because it really is normal and widespread to do so, we&apos;ve built a culture where those who **conform** are rewarded, and those who **speak** are punished. **This is no accident.**</p>

    <p>Social media has not just created a deception—it has refined it into an art form, more insidious than anything imagined in *1984* or *Brave New World*.</p>

    <p>I never wanted responsibility. But I&apos;ve learned too much to pretend I don&apos;t see what&apos;s happening. Both paths—silence and truth—are uncomfortable. My only real drive is to finish my work: to launch my startups, build tools that **serve people**, and finish what I started—primarily my flagship project, tentatively titled <em>Globethoughts</em>.</p>

    <p>If my words provoke you, ask yourself: **Who benefits from your outrage?** Are they the ones who challenge your doubt—or the ones who depend on it?</p>

    <p>Because in the end, **merely being oneself without compromise is the rarest thing one can do.** In the long run, it may even do more than just change a life. It will change the world. If it is so hard for me, it has to be powerful for everyone.</p>
  </div>
</div>


        {/* Social Links - Right Column */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-md text-yellow-300 font-light italic text-center mb-4">It is our ends that connect us, not our understanding:</h3>
          <div className="flex flex-col space-y-4">
            {SOCIAL_LINKS.map(({ name, url, icon: Icon, description }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4 hover:bg-gray-700 transition-colors duration-300"
                style={{ backgroundImage: `url(${textureC})`, backgroundRepeat: 'repeat' }}
              >
                <Icon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto mt-16 bg-gray-800 p-8 rounded-lg shadow-lg" 
           style={{ backgroundImage: `url(${textureA})`, backgroundRepeat: 'repeat' }}>
        <h3 className="text-md text-center text-amber-300 mb-6 italic">The only reason common sense is uncommon is that self-doubt is too common.</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['email', 'message'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-400 mb-2 capitalize">
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
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Be as you are - the world needs it. Your oppressors need it. "
                />
              ) : (
                <input
                  type={field}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            {status === 'sending' ? 'Sending...' : 'Be as you are'}
          </button>
          {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-center">Failed to send message. Please try again.</p>}
        </form>
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