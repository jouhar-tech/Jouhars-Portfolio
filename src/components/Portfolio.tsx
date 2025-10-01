import { motion } from 'framer-motion';
import { useRef } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';
import Experience from './Experience';
import Navbar from './Navbar';


const Portfolio = () => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="relative text-foreground bg-background"
    >
      {/* Remove ThemeToggle from here */}

      {/* Background Pattern */}
      <div className="fixed  inset-0 overflow-hidden pointer-events-none">
        <div className="absolute  inset-0">
          <div className="w-full h-full opacity-5" style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
            `
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
<Navbar/>
       
        {/* Hero Section */}
        <motion.div id='hero'  
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Hero />
        </motion.div>

        {/* Skills Section */}
        <motion.div id='skills' 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative "
        >
          <Skills />
        </motion.div>


        {/* Projects Section */}
        <motion.div id='projects'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative "
        >
          <Projects />
        </motion.div>
{/* Experience Section */}
<motion.div id='experience'
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
  className="relative "
>
  <Experience />
</motion.div>

        {/* Contact Section */}
        <motion.div id='contact' 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative "
        >
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.footer id='footer' 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative py-12 text-center border-t border-neutral-800 4"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-neutral-900 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
               <motion.span
  className="text-2xl inline-block"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
>
  💻
</motion.span>

              </div>
            </div>

            <p className="text-neutral-500 mb-4">
              Crafted using React, Three.js, and Framer Motion
            </p>
            <p className="text-sm text-neutral-600">
              © 2024 Mahammad Ali Jouhar. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
      {/* Analytics */}
      
    </div>
  );
};

export default Portfolio;
