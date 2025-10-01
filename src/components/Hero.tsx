import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profileImage-removebg-preview.png';
import { useState, useEffect } from 'react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          `radial-gradient(circle at 30% 70%, hsl(var(--neon-cyan)/0.1) 0%, transparent 40%)`,
          `radial-gradient(circle at 70% 30%, hsl(var(--neon-cyan)/0.1) 0%, transparent 40%)`,
          `radial-gradient(circle at 30% 70%, hsl(var(--neon-cyan)/0.1) 0%, transparent 40%)`,
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-30"
        style={{ left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

const TypewriterText = () => {
  const texts = [
    'Mahammad Ali Jouhar',
    'Full-Stack Developer',
    '.Net Developer',
    'Backend Developer',
    'React Developer',
    'Java Developer',
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    const timeout = setTimeout(() => {
      if (deleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text min-h-[2em]">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    // Prevent horizontal overflow issues on mobile
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto text-center md:text-left py-16 sm:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6 w-full md:w-1/2"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm uppercase tracking-widest text-neon-cyan"
              >
                Hi, I'm
              </motion.div>
              <TypewriterText />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
            >
              Crafting exceptional digital experiences with modern technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="/Jouhar_resume.pdf"
                download="Jouhar_resume.pdf"
                className="btn-neon group text-sm sm:text-base"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>

              <a
                href="https://github.com/jouhar-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-neon group text-sm sm:text-base"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12" />
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mahammad-ali-jouhar-09a532253/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-neon group text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110" />
                Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-40"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-500 opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.img
                src={profilePhoto}
                alt="Mahammad Atheek Rahman"
                className="relative z-10 w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
                whileHover={{ rotateZ: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
